import {ModuleStatus, SkillType} from "@/types";

export const SKILL_LEVEL_CUP = [
   20, 50, 90, 150, 200, 300, 450, 625, 825, 1000
]

export const SKILLS_CORE: SkillType[] = [
   {
      name: 'lockpicking',
      overcome: true,
      advantage: false,
      attack: false,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'driving',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'will',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: ['+15 ед. ментального стресса за ед. навыка'],
      module: 'core'
   },
   {
      name: 'theft',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: ['+0.5 фт. к дальности кражи за ед. навыка'],
      module: 'core'
   },
   {
      name: 'perception',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: ['+5 фт. к дальности обзора за ед. навыка'],
      module: 'core'
   },
   {
      name: 'deduction',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'fight',
      overcome: true,
      advantage: true,
      attack: true,
      defence: true,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'knowledge',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'contacts',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'agility',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: ['+5 фт к перемещению за ед. навыка'],
      module: 'core'
   },
   {
      name: 'medicine',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'mechanics',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'deceit',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'provocation',
      overcome: true,
      advantage: true,
      attack: true,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'resources',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'stealth',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'shooting',
      overcome: true,
      advantage: true,
      attack: true,
      defence: false,
      bonuses: [],
      module: 'core'
   },
   {
      name: 'constitution',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: ['+15 ед. здоровья за ед. навыка'],
      module: 'core'
   },
   {
      name: 'charisma',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: [],
      module: 'core'
   }
].map(e => ({...e, status: ModuleStatus.New}))

const SKILLS_MAGIC_MODULE: SkillType[] = [
   {
      name: 'magic',
      overcome: true,
      advantage: true,
      attack: true,
      defence: true,
      bonuses: ['+20 ед маны за ед. навыка'],
      module: 'magic',
      status: ModuleStatus.New
   },
   {
      name: 'will',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: ['+30 ед маны за ед. навыка'],
      module: 'magic',
      status: ModuleStatus.Changed
   },
   {
      name: 'knowledge',
      overcome: true,
      advantage: true,
      attack: false,
      defence: false,
      bonuses: ['+3 максимум заклинаний за ед. навыка'],
      module: 'magic',
      status: ModuleStatus.Changed
   }
]

const SKILLS_ALCHEMY_MODULE: SkillType[] = [
   {
      name: 'alchemy',
      overcome: true,
      advantage: true,
      attack: true,
      defence: true,
      bonuses: ['+15 ед безопасного порога интоксикации за ед. навыка'],
      module: 'alchemy',
      status: ModuleStatus.New
   },
   {
      name: 'constitution',
      overcome: true,
      advantage: true,
      attack: false,
      defence: true,
      bonuses: ['+20 ед безопасного порога интоксикации за ед. навыка'],
      module: 'alchemy',
      status: ModuleStatus.Changed
   }
]


const extendSkill = (extendable: SkillType, extension: SkillType): SkillType => {
   return {
      name: extendable.name,
      module: extendable.module,
      attack: extension.attack,
      defence: extension.defence,
      overcome: extension.overcome,
      advantage: extension.advantage,
      bonuses: [...extendable.bonuses, ...extension.bonuses],
      status: extension.status
   }
}

const uniteSkills = (...modules: SkillType[][]): SkillType[] => {
   if (!modules.length) {
      throw new Error('No modules loaded.')
   }
   const [core] = modules.splice(0,1);

   const newSkills = modules.map(skills => skills.filter(skill => skill.status === ModuleStatus.New)).flat()
   const changedSkills = modules.map(skills => skills.filter(skill => skill.status === ModuleStatus.Changed)).flat()

   newSkills.forEach(skill => {
      if (core.find(s => s.name === skill.name)) {
         changedSkills.unshift(skill)
      }
      else {
         core.push(skill)
      }
   })

   changedSkills.forEach(skill => {
      const index = core.findIndex(s => s.name === skill.name)
      if (index !== -1) {
         core.splice(index, 1, extendSkill(core[index], skill))
      }
   })
   return core;
}

 export const SKILLS = uniteSkills(SKILLS_CORE, SKILLS_MAGIC_MODULE, SKILLS_ALCHEMY_MODULE)

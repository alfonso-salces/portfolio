import { SkillModel } from '../../home/models/skill.model';

export const defaultSkills = [
  {
    key: 'responsive',
    icon: 'responsive-light.svg',
    title: 'Responsive',
    description:
      'Los diseños que realizo son completamente responsive, adaptados a los últimos estándares de medida de los diferentes dispositivos existentes hoy día.',
  },
  {
    key: 'modular',
    icon: 'module-light.svg',
    title: 'Modular',
    description:
      'Cada aplicación diseñada será modular, con lo cual, cada parte será reutilizable, tanto los módulos como sus respectivos componentes.',
  },
  {
    key: 'planning',
    icon: 'strategy-light.svg',
    title: 'Planificación',
    description:
      'Soy consciente de que una planificación exhaustiva es el propulsor de cualquier proyecto exitoso, por lo tanto siempre planifico hasta el más mínimo detalle en los proyectos en los que participo.',
  },
] as SkillModel[];

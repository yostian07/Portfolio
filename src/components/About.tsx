import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, Code, Database, Layout } from 'lucide-react';

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Desarrollo Web",
    description: "HTML, CSS, JavaScript, React"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Bases de Datos",
    description: "SQL, MongoDB"
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Diseño UI/UX",
    description: "Figma, Adobe XD"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Aprendizaje Continuo",
    description: "Siempre actualizado con las últimas tecnologías"
  }
];

export function About() {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-200">Sobre Mí</h2>
          <p className="text-blue-100/70">
            Soy un estudiante apasionado por la tecnología y el desarrollo de software.
            Me especializo en crear soluciones innovadoras y aprender nuevas tecnologías.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow bg-secondary/50 backdrop-blur-sm border-blue-500/10 hover:border-blue-500/20">
                <div className="mb-4 text-blue-400">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-200">{skill.title}</h3>
                <p className="text-sm text-blue-100/70">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
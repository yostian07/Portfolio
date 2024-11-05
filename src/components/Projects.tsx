import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Sistema de Gestión",
    description: "Aplicación web para gestión de inventarios y ventas",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop",
    tags: ["HTML", "Node.js", "Oracle","TailwindCSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal con diseño moderno y animaciones",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2340&auto=format&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    demo: "#"
  },

];

export function Projects() {
  return (
    <section className="py-20 bg-secondary/30 backdrop-blur-sm" id="projects">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-200">Proyectos</h2>
          <p className="text-blue-100/70">
            Una selección de mis proyectos más recientes y destacados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full bg-secondary/50 backdrop-blur-sm border-blue-500/10 hover:border-blue-500/20">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-200">{project.title}</CardTitle>
                  <CardDescription className="text-blue-100/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-500/10 text-blue-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-blue-500/50 hover:bg-blue-500/10">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-500/50 hover:bg-blue-500/10">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
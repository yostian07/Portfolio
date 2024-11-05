import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-200">Contacto</h2>
          <p className="text-blue-100/70">
            ¿Tienes algún proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <Card className="bg-secondary/50 backdrop-blur-sm border-blue-500/10">
            <CardHeader>
              <CardTitle className="text-blue-200">Envíame un mensaje</CardTitle>
              <CardDescription className="text-blue-100/70">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Nombre" className="bg-secondary/50 border-blue-500/20 focus:border-blue-500/50" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" className="bg-secondary/50 border-blue-500/20 focus:border-blue-500/50" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Mensaje" className="min-h-[120px] bg-secondary/50 border-blue-500/20 focus:border-blue-500/50" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
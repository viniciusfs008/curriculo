"use client";

import { motion } from "framer-motion";

interface ListItemProps {
  titulo: string;
  texto: string;
  data?: string;
}

function ListItem({ titulo, texto, data }: ListItemProps) {
  return (
    <motion.div
      className="mt-6"
      initial={{ opacity: 0, x: 500 }} // Inicia fora da tela, à direita
      whileInView={{ opacity: 1, x: 0 }} // Quando entrar na tela, fica visível e se move para a posição final
      viewport={{ once: true }} // Anima apenas uma vez ao entrar na tela
      transition={{ duration: 0.5 }}
    >
      <ul className="mt-6 space-y-4">
        <li className="bg-background p-4 shadow rounded-md">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{titulo}</h3>
            {data && (
              <p className="text-xs text-muted-foreground font-semibold">
                {data}
              </p>
            )}
          </div>
          <p className="text-muted-foreground">{texto}</p>
        </li>
      </ul>
    </motion.div>
  );
}

export default ListItem;

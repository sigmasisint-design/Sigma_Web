
// pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Meu Projeto Modular!</h1>
      <p>Esta é a sua nova Home Page ( / ).</p>
      
      <p>Acesse a nova tela de usuários:</p>
      {/* O Next.js usa o componente Link para navegação */}
      <Link href="/usuarios">
        Ir para a Tela de Usuários
      </Link>
      
      {/*
        COPIE E COLE A PARTE DO SEU CÓDIGO HTML/JSX/JS
        que era a Home Page (a tela que aparecia no /) do seu index original.
      */}
      
    </div>
  );
}

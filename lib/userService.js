// lib/userService.js
import { supabase } from './supabaseClient'; // Importa a conexão que acabamos de criar

// Função para buscar todos os usuários
export async function fetchAllUsers() {
    // ATENÇÃO: Você precisa trocar 'nome_da_sua_tabela_de_usuarios'
    // Pelo nome exato da sua tabela no Supabase.
    const { data, error } = await supabase
        .from('perfis') 
        .select('*');

    if (error) {
        console.error('Erro ao buscar usuários:', error);
        // Em um projeto real, você faria um tratamento de erro melhor
        throw error; 
    }
    return data;
}

// Seu antigo código de "select" do Supabase vai aqui dentro dessa função!

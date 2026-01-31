const ptBR = {
  Chat: {
    SubTitle: (count: number) => `${count} mensagens`,
    Actions: {
      ChatList: "Ir para Lista de Conversas",
      Copy: "Copiar",
      Delete: "Excluir",
    },
    InputActions: {
      Stop: "Parar geração",
      Clear: "Limpar Contexto",
    },
    Thinking: "Pensando…",
    InputMobile: "Enter para enviar",
    Input:
      "Enter para enviar, Shift + Enter para quebrar linha, digite URLs para adicionar um documento PDF ou HTML ao contexto",
    Send: "Enviar",
    IsContext: "Prompt Contextual",
    LoadingURL: "Carregando conteúdo...",
    LLMError:
      "Ocorreu um erro ao chamar a API. Por favor, tente novamente mais tarde.",
  },
  Upload: {
    Invalid: (acceptTypes: string) =>
      `Tipo de arquivo inválido. Por favor, selecione um arquivo com um destes formatos: ${acceptTypes}`,
    SizeExceeded: (limitSize: number) =>
      `Tamanho do arquivo excedido. Limite é ${limitSize} MB`,
    Failed: (e: string) => `Erro ao enviar arquivo: ${e}`,
    ParseDataURLFailed:
      "Não foi possível ler o arquivo: Verifique se ele está criptografado.",
    UnknownFileType: "Tipo de arquivo desconhecido",
    ModelDoesNotSupportImages: (acceptTypes: string) =>
      `Upload de imagem não é suportado para este modelo. Envie um dos tipos suportados: ${acceptTypes}`,
  },
  Export: {
    Image: {
      Modal:
        "Pressione e segure ou clique com o botão direito para salvar a imagem",
    },
  },
  Memory: {
    Title: "Prompt de Memória",
    Send: "Enviar Memória",
  },
  Home: {
    Github: "Github",
    Logout: "Sair",
    Settings: "Configurações",
  },
  Settings: {
    Title: "Configurações",
    SubTitle: "Todas as Configurações",
    Actions: {
      ClearAll: "Limpar Todos os Dados",
      ResetAll: "Redefinir Todas as Configurações",
      Close: "Fechar",
      ConfirmClearAll: "Confirmar limpeza de todos os dados?",
    },
    Lang: {
      Name: "Idioma",
    },
    Avatar: "Avatar",
    Update: {
      Version: (x: string) => `Versão: ${x}`,
      IsChecking: "Verificando atualização...",
      FoundUpdate: (x: string) => `Nova versão encontrada: ${x}`,
      GoToUpdate: "Atualizar",
    },
    SendKey: "Tecla de Envio",
    Theme: "Tema",
    TightBorder: "Borda Estreita",
    Prompt: {
      Disable: {
        Title: "Desabilitar auto-completar",
        SubTitle: "Digite / para acionar auto-completar",
      },
      List: "Lista de Prompts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} integrados, ${custom} definidos pelo usuário`,
      Edit: "Editar",
    },
    HistoryCount: {
      Title: "Contagem de Mensagens Anexadas",
      SubTitle: "Número de mensagens enviadas anexadas por requisição",
    },
    CompressThreshold: {
      Title: "Limite de Compressão de Histórico",
      SubTitle:
        "Comprimirá se o comprimento de mensagens não comprimidas exceder o valor",
    },
    Danger: {
      Clear: {
        Title: "Limpar Todos os Dados",
        SubTitle: "Redefinir todos os assistentes e limpar todas as mensagens",
        Action: "Limpar",
        Confirm: "Confirmar limpeza de todos os dados?",
      },
    },
    Model: "Modelo",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Um valor maior torna a saída mais aleatória",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Não altere este valor junto com a temperatura",
    },
    MaxTokens: {
      Title: "Tokens Máximos",
      SubTitle: "Comprimento máximo de tokens de entrada e tokens gerados",
    },
    Backup: {
      Download: {
        Title: "Backup de Assistentes",
        SubTitle: "Baixar o estado dos seus assistentes para um arquivo JSON",
      },
      Upload: {
        Title: "Restaurar Assistentes",
        SubTitle: "Enviar o estado dos seus assistentes de um arquivo JSON",
        Success: "Assistentes restaurados com sucesso do arquivo JSON",
        Failed: (e: string) => `Erro ao importar o arquivo JSON: ${e}`,
      },
    },
  },
  Store: {
    DefaultBotName: "Novo Assistente",
    BotHello: "Olá! Como posso ajudá-lo hoje?",
  },
  Error: {
    Unauthorized: "Não autorizado",
  },
  BotPage: {
    Name: "Assistente",
    SubTitle: (count: number) => `${count} assistentes`,
    BotHello: "Olá! Como posso ajudá-lo hoje?",
  },
  Copy: {
    Success: "Copiado para a área de transferência",
    Failed:
      "Cópia falhou, por favor conceda permissão para acessar a área de transferência",
  },
  Context: {
    Add: "Adicionar um Prompt",
    Clear: "Contexto Limpo",
    Revert: "Reverter",
    Title: "Configurações de Prompt de Contexto",
  },
  Share: {
    Title: "Compartilhar Assistente",
    Url: {
      Title: "URL",
      Hint: "Use a URL para compartilhar seu assistente. A URL será válida por 30 dias.",
      Error: "Ops, algo deu errado. Por favor, tente novamente mais tarde.",
    },
  },
  Bot: {
    Name: "Assistente",
    Page: {
      Search: (count: number) => `Buscar Assistente - ${count} assistentes`,
      Create: "Criar assistente",
    },
    Item: {
      Edit: "Editar",
      Delete: "Excluir",
      DeleteConfirm: "Confirmar exclusão?",
      Share: "Compartilhar",
    },
    EditModal: {
      Title: `Editar Assistente`,
      Clone: "Clonar",
    },
    Config: {
      Name: "Nome do Assistente",
      Title: "Configurações do Assistente",
      Datasource: "Fonte de Dados",
    },
  },

  Welcome: {
    Title: "Total Braz Cubas - Assistente Virtual",
    SubTitle: "Seu assistente inteligente para o condomínio",
    Quote:
      "Esta ferramenta facilita o acesso às informações do condomínio e torna a comunicação muito mais eficiente.",
    LoginLinkedinTitle: "Entrar com LinkedIn",
  },
};

export type LocaleType = typeof ptBR;
export default ptBR;

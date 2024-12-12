export interface Mission {
  id: number;
  nome_missao: string;
  planeta_alvo: string;
  duracao_anos: number;
  tripulantes: number;
  tecnologias: string[];
}

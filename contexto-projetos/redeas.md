# Rédeas — contexto para o portfólio

Última análise: 12/11/2026. Fontes: [agente](https://github.com/ArthurMMaciel/redeas-agent), commit `6eda0f04ce407bf9f437568f25bf7a9498402fd2`; [site](https://github.com/ArthurMMaciel/redeas-landing), commit `5be0cd6ec1c9f1cdfdeb5cac010f5283fdaf026f`. Análise estática, sem validar serviços em produção.

## Problema e proposta documentados

O documento `docs/produto.txt` descreve produtores rurais com registros financeiros dispersos entre papel, planilhas, WhatsApp e memória, e dificuldade para acompanhar o realizado em relação ao planejamento da safra. A proposta é aproximar o controle financeiro da rotina do produtor, usando conversas para registrar movimentações e, como objetivo, fornecer visão de gastos, receitas, limites e planejamento.

## Evidências de implementação

- O backend recebe eventos do WhatsApp via WAHA. `message-processor-service.ts` identifica usuário e situação da assinatura, interpreta determinados lançamentos por regras e usa um cliente de IA para respostas quando a mensagem não é reconhecida como transação. Há tratamento de mensagens duplicadas. Fontes: `src/infrastructure/http/routes/webhook-routes.ts` e `src/application/services/message-processor-service.ts`.
- O código organiza entidades e regras financeiras separadas dos serviços de aplicação e das integrações HTTP, Supabase, WhatsApp e pagamentos. Existem testes de regras financeiras e processamento. Fonte: `README.md` e árvore `src/`.
- O projeto também contém uma integração específica de controle financeiro pessoal por WhatsApp e Google Sheets; não presumir que ela seja a experiência agrícola para clientes. Fonte: `docs/agent-memory/current-context.md` e `src/infrastructure/personal-finance/`.
- O repositório do site inclui formulário, fluxo de checkout e funções Supabase para processar eventos de pagamento e acionar o agente. A presença do código não comprova que o fluxo esteja operacional em produção. Fontes: `README.md`, `src/app/App.tsx` e `supabase/functions/` do site.

## Limites e pendências

O documento de contexto do agente lista como pendentes a conexão dos repositórios Supabase aos casos de uso, o onboarding conversacional, a evolução do CRUD e o planejamento de safra com alertas persistidos. Existem peças de domínio e casos de uso, mas não foi comprovado o fluxo agrícola completo de ponta a ponta. A documentação do README e o código podem divergir: conferir antes de qualquer afirmação. Não há evidência revisada de clientes, escala ou resultados mensuráveis.

## Confirmações com Arthur

- Qual experiência ou observação motivou a ideia e por que escolheu o WhatsApp para o produtor?
- Qual foi seu papel e quem mais participou das decisões e da implementação?
- Como está o produto hoje para usuários reais e quais funcionalidades considera prioritárias ou apresentáveis?

## Direção de narrativa provisória

Rédeas nasce da proposta de tornar o controle financeiro rural mais próximo da rotina de quem está no campo. A solução explora o WhatsApp como porta de entrada para lançamentos e uma jornada comercial própria, com arquitetura que separa as regras financeiras das integrações. O acompanhamento completo de safra é parte da visão em desenvolvimento, não um resultado comprovado.

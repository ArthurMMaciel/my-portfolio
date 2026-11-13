# Nora — contexto para o portfólio

Análise estática em 12/11/2026. [Repositório](https://github.com/ArthurMMaciel/carrinho-IA), commit `e37a6cd3b6228ceda99a841af5125d913d61e36e`.

A proposta é transformar uma necessidade de compra descrita em conversa em uma intenção estruturada, comparar produtos e montar um carrinho dentro das preferências e do orçamento. A compra é concluída fora da plataforma.

O README e a estrutura de serviços descrevem uma separação significativa: a interpretação da conversa usa um provedor de IA, enquanto filtros, ranking e cálculos de orçamento seguem regras determinísticas. Há contratos para provedores de marketplaces e dados normalizados. A demonstração usa catálogos simulados e provedor local; integrações reais não foram comprovadas. O README documenta critérios de ranking e uma correção para evitar favorecer avaliações com poucas amostras.

Fontes: `README.md`, `src/providers/` e `src/services/`. **A confirmar:** motivação, papel de Arthur, decisões e resultados.

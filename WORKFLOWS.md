# Sala Philips - DevOps na Prática - Workflows

Workflows (ou _pipelines_) são como "programas" que executam ações automatizadas.
No GitHub, chamamos de `GitHub Actions`.

## Estrutura
Um _workflow_ é composto pela seguinte estrutura:
 - Nome
 - Trigger (Gatilho) [1..N]
   - Entradas [0..N]
 - Jobs [1..N]
   - Passos [1..N]

Exemplo:
```
    name: 'Nome do Workflow'

    on:
      workflow_dispatch:
        inputs:
          acao:
            type: string
            required: true
            description: 'Ação'
          valor:
            type: string
            required: true
            description: 'Valor'
    
    jobs:
      nome_job_1:
        runs-on: ubuntu-latest
        name: 'Nome Job 1'
        steps:
          - id: checkout
            name: 'Checkout Repository'
            uses: actions/checkout@v3
```

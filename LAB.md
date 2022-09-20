# Sala Philips - DevOps na Prática - Lab

## Criação de Workflows
Neste Lab faremos passoa a passo a criação de um novo _workflow_ para uso no repositório.

---
---
## Instruções
### 1 Criar um novo Branch

- Para criar um novo branch, utilize a automação [01 - Create branch](https://github.com/pedrogolino/senac-devops-na-pratica/actions/workflows/01_create_branch.yml)

    ![Actions - 01 Create Branch](docs/images/actions_create-branch.jpg)

- Escolha o seu __Grupo__ e __Cor__ conforme instrução.

    ![Actions - 01 Create branch - Parameters](docs/images/actions_parameters.jpg)

- Clique em `Run workflow`

    ![Actions - 01 Create Branch - Run](docs/images/actions_run-workflow.jpg)

- Verifique o resutado no passo `Create Development Branch`
    ```
    Criado Branch: refs/heads/<Grupo>_<Cor>_<Iniciais_da_conta>
    ```
    ![Actions - 01 Create Branch - Created](docs/images/action_branch-created.jpg)

### 2 - Adicionar um novo arquivo de _workflow_
- Criar estrutura do _workflow_
- Definição do _workflow_
- Step `checkout`
- Step `npm install`
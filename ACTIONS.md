# Sala Philips - DevOps na Prática - ACTIONS

 - [Estrutura de actions](#estrutura-de-actions)
 - [Links úteis](#links-úteis)

## Estrutura de actions:
### Identificação da Action
```
    - id: id_da_action
      name: 'Nome da Action'
```

No caso de açõe reutilizáveis:
```
    uses: <reference_to_action>
    with:
        parameter1: 'value'
        parameter2: 'value'
```
No caso de scripts:
```
    shell: [ sh | bash | cmd | powershel ]
    run: |
        <script>
```

### Outputs da action
As action podem conter valores da saída/retorno [0..N]
Exemplo:
```
    - id: somar
      name: 'Somar dois numeros'
      uses: acao_somar
      with:
        parametro1: 1
        parametro2: 2
    
    - id: resultado
      name: 'Resultado da Soma'
      script: shell
      run: |
        echo "Resultado da soma: ${{ steps.somar.outputs.resultado }}"
```

## Actions Comuns

### Checkout
A action `checkout` é utilizada para fazer o "_download_" do repositório para o _workspace_ do _workflow_.

Referência:
- https://github.com/actions/checkout

```
    - id: checkout_repository
      name: 'Checkout Repository'
      uses: actions/checkout@v3
      with:
        <parametros>
```
### GitHub Script
A action `github-script` é utilizada para executar scripts `nodejs` utilizando bibliotecas para acesso a conteúdo do GitHub.

Referência:
 - https://github.com/actions/github-script
 - 
```
    - id: acao_script
      name: 'Nome da Ação'
      uses: actions/github-script@v6
      with:
        <parametros>
```

## Links úteis
 - [Documentação GitHub Actions](https://docs.github.com/en/actions/using-workflows/about-workflows)
 - [Repositório Actions GitHub](https://github.com/actions)
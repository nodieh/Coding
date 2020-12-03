def pergunta_nome():
	nome = input("Qual é o seu nome? ")
	print('O seu nome é "' + nome + '"')

def idade():
	ano_informado = int(input("Em que ano você nasceu? "))
	from datetime import datetime
	agora = datetime.now()
	ano = int(agora.year)
	calculo_idade = ano - ano_informado
	print("Sua idade é ",calculo_idade," anos")



pergunta_nome()
idade()
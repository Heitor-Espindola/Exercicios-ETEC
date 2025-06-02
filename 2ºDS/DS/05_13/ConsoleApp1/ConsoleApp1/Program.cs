// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite numeros e faremos a soma (cuidado com números negativos, eles travam o sistema)");
int valor;
int soma = 0;

valor = int.Parse(Console.ReadLine());
soma = soma + valor;

while (valor >= 0) {
    valor = int.Parse(Console.ReadLine());
    
    soma = soma + valor;
    Console.WriteLine($"A soma total é: {soma}");
};


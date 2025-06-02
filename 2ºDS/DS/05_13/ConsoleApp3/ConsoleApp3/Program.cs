// See https://aka.ms/new-console-template for more information
Console.WriteLine("Faça sua escolha:\n1 -> Somar\n2 -> Subtrair\n3 -> Multiplicar\n4 -> Fechar programa");
int escolha = int.Parse(Console.ReadLine());
int num1, num2, num;

while (escolha != 4)
{
    Console.Clear();
    switch (escolha)
    {
        case 1:
            Console.WriteLine("Digite o 1º número");
            num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Digite o 2º número");
            num2 = int.Parse(Console.ReadLine());
            num = num1 + num2;
            Console.WriteLine($"Soma: {num}\n\n");
            break;
        case 2:
            Console.WriteLine("Digite o 1º número");
            num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Digite o 2º número");
            num2 = int.Parse(Console.ReadLine());
            num = num1 - num2;
            Console.WriteLine($"Subtração: {num}\n\n");
            break;
        case 3:
            Console.WriteLine("Digite o 1º número");
            num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Digite o 2º número");
            num2 = int.Parse(Console.ReadLine());
            num = num1 * num2;
            Console.WriteLine($"Multiplicação: {num}\n\n");
            break;
        default :

            break;
    }

    Console.WriteLine("Faça sua escolha:\n1 -> Somar\n2 -> Subtrair\n3 -> Multiplicar\n4 -> Fechar programa");
    escolha = int.Parse(Console.ReadLine());

}

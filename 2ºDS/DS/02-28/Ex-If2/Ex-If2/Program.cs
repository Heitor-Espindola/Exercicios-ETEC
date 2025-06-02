// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite seu salário:");
decimal salario = decimal.Parse(Console.ReadLine());

if (salario <= 200)
{
    Console.WriteLine($"Seu salário novo será: {salario + (salario * 50 / 100)}");
}
else if (salario >= 200 || salario < 500)
{
    Console.WriteLine($"Seu salário novo será: {salario + (salario * 30 / 100)}");
}
else
{
    Console.WriteLine($"Seu salário novo será: {salario + (salario * 15 / 100)}");
}
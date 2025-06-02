// See https://aka.ms/new-console-template for more information
using System.Diagnostics;

Console.WriteLine("Digite uma temperatura em Celsius:");
int temperatura = int.Parse(Console.ReadLine());

Console.WriteLine("Digite em qual opção você quer transformar essa temperatura: \n 1 - Farenheit \n 2 - Kelvin");
decimal escolha = decimal.Parse(Console.ReadLine());

switch (escolha)
{
    case 1:
        Console.WriteLine($"Farenheit: {(temperatura * 9 / 5) + 32}");
        break;
    case 2:
        Console.WriteLine($"Kelvin: {temperatura + 273.15}");
        break;
    default:
        Console.WriteLine("ESSA OPÇÃO NÃO EXISTE! PROGRAMA ENCERRADO");
        break;
}
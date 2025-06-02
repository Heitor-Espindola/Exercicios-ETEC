// See https://aka.ms/new-console-template for more information

decimal nota1, nota2, nota3, nota4;


Console.WriteLine("Digite a 1º nota:");
nota1 = decimal.Parse(Console.ReadLine());
Console.WriteLine("Digite a 2º nota:");
nota2 = decimal.Parse(Console.ReadLine());
Console.WriteLine("Digite a 3º nota:");
nota3 = decimal.Parse(Console.ReadLine());
Console.WriteLine("Digite a 4º nota:");
nota4 = decimal.Parse(Console.ReadLine());


decimal media = (nota1 + nota2 + nota3 + nota4) / 4;

Console.WriteLine($"{media}");

if (media >= 9 || media <= 10)
{
    Console.WriteLine($"Sua nota foi {media}, você ficou com A. PARABÉNS!");
}
else if (media >= 7 || media < 9)
{
    Console.WriteLine($"Sua nota foi {media}, você ficou com B");
}
else if (media >= 5 || media < 7)
{
    Console.WriteLine($"Sua nota foi {media}, você ficou com C");
}
else if (media < 5)
{
    Console.WriteLine("REPROVADO");
}
{
    Console.WriteLine("NOTA INVÁLIDA!");
}
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite 20 variáveis");

int Maior = 0, Menor = 0;

for (int i = 0; i < 19; i++)
{
    int var = int.Parse(Console.ReadLine());
    if (var >= Maior)
    {
        Maior = var;
    }
    if (var <= Menor)
    {
        Menor = var;
    }
}

Console.WriteLine($"Maior: {Maior}\nMenor: {Menor}");
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Escolha uma Opção de 1 a 4: \n1 - Olá! \n2 - Boa Tarde! \n3 - Boa Noite! \n4 - Bom Dia!");
int num = int.Parse(Console.ReadLine());

switch (num)
{
    case 1:
        Console.WriteLine("Olá!");
        break;
    case 2:
        Console.WriteLine("Boa Tarde!");
        break;
    case 3:
        Console.WriteLine("Boa Noite!");
        break;
    case 4:
        Console.WriteLine("Bom Dia");
        break;
    default:
        Console.WriteLine("NÚMERO INVÁLIDO! \nPROGRAMA ENCERRANDO");
        break;
}
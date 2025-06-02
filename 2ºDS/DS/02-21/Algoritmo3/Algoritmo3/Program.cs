Console.WriteLine("Digite um número");
int num = Int32.Parse(Console.ReadLine());
Console.WriteLine("Digite a porcentagem que você quer desse número");
int porcent = Int32.Parse(Console.ReadLine());

Console.WriteLine($"A porcentagem {(porcent)} de {(num)} é: {(num * porcent / 100)}");
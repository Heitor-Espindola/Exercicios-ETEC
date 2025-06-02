using System;

Console.WriteLine("Digite o seu ano de nascimento");
int anoNasc = Int32.Parse(Console.ReadLine());
Console.WriteLine("Digite o ano atual");
int anoAtual = Int32.Parse(Console.ReadLine());

var idade = anoAtual - anoNasc;

Console.WriteLine($"Sua idade é {(idade-1)} ou {(idade)}! Acertei?");

Console.WriteLine("Digite o seu ano de nascimento");
int anoNasc = Int.Parse(Console.ReadLine());
Console.WriteLine("Digite o ano atual");
int anoAtual = Int.Parse(Console.ReadLine());

var idade = anoAtual - anoNasc;

Console.WriteLine($"Sua idade é {(idade - 1)} ou {(idade)}! Acertei?");
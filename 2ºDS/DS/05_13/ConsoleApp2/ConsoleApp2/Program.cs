// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite o Usuário:");
string nome = Console.ReadLine();

string senha = "";
Console.WriteLine($"Para confirmar que você é {nome}, digite a senha:");
while (senha != "etec#2025@")
{
    senha = Console.ReadLine();
    if (senha != "etec#2025@") {
        Console.WriteLine("senha incorreta");
    };
}


Console.WriteLine($"Olá {nome}");
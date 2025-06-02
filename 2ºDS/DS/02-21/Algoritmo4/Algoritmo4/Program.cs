Console.WriteLine("DIgite seu salário (em R$):");
decimal dinheiro = decimal.Parse(Console.ReadLine());

Console.WriteLine($"Se você fizer um cursinho, pode ganhar {(dinheiro + (dinheiro * 10 / 100))} (+10%)," +
    $" {(dinheiro + (dinheiro * 30 / 100))} (+30%) ou até {(dinheiro + (dinheiro * 50 / 100))} (+50%)");

public class If {

	public static void main(String[] args) {
		System.out.println("Testando condicionais");

		int idade = 23;
		int quantidadePessoas = 3;
		boolean acompanhado = quantidadePessoas >= 2;

		if (idade >= 18 && acompanhado) {
			System.out.println("Pode entrar na festa");
		} else {
			System.out.println("Não pode entrar na festa");
		}
	}

}

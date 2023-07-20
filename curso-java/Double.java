
public class Double {
	public static void main(String[] args) {
		double salario = 312312.73;
		System.out.println("O salário do cidadão é de: R$ " + salario);

		double idade = 37; // um número inteiro pode ser declarado como um double, mas um double não pode
												// ser declarado como um inteiro

		double divisao = 3.14 / 2;

		System.out.println(divisao);

		int outraDivisao = 5 / 2; // divisao de inteiros retorna somente um resultado inteiro, ira retornar 2, não
															// 2.5
		System.out.println(outraDivisao);

		double novaTentativa = 5.0 / 2;
		System.out.println(novaTentativa);
	}
}

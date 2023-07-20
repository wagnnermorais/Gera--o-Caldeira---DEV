
public class Char {
	public static void main(String[] args) {
		char letra = 'W'; // usa-se aspas simples
		System.out.println(letra);

		char valor = 65; // char utiliza a tabela ASCII, e o numero 65 equivale a letra A
		System.out.println(valor);

		valor = (char) (valor + 1);
		System.out.println(valor);

		String palavra = "Alura cursos on-line de tecnologia!"; // usa-se aspas duplas
		System.out.println(palavra);
	}
}

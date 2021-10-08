package br.org.generation.blogpessoal.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import br.org.generation.blogpessoal.model.Usuario;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UsuarioRepositoryTests {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@BeforeAll
	void start() {

		Usuario usuario = new Usuario(0L, "João Reelt", "joaor@gmail.com", "123456789");
		if (!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			usuarioRepository.save(usuario);

		usuario = new Usuario(0L, "Erika Reelt", "erika@gmail.com", "987654321");
		if (!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			usuarioRepository.save(usuario);

		usuario = new Usuario(0L, "Fernando Reelt", "fereelt@gmail.com", "asdfghjk");
		if (!usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			usuarioRepository.save(usuario);
		usuario = new Usuario(0l, "Ana Paula", "ana@gmail.com", "fraca1234");
	}

	@Test
	@DisplayName("Retorna o nome")
	public void findByRetornaName() throws Exception {

		Usuario usuario = usuarioRepository.findByNome("João Reelt");
		assertTrue(usuario.getNome().equals("João Reelt"));
	}

	@Test
	@DisplayName("Retorna 3 nomes")
	public void findAllByNomeContainingIgnoreCaseRetornaTresUsuarios() {

		List<Usuario> listaDeUsuarios = usuarioRepository.findAllByNomeContainingIgnoreCase("Reelt");
		assertEquals(3, listaDeUsuarios.size());
	}

	@AfterAll
	public void end() {

		usuarioRepository.deleteAll();
	}

}

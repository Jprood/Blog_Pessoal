package br.org.generation.blogpessoal.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import br.org.generation.blogpessoal.model.Usuario;
import br.org.generation.blogpessoal.repository.UsuarioRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UsuarioControllerTests {

	@Autowired
	private TestRestTemplate testRestTemplate;

	private Usuario usuario;
	private Usuario usuarioAdmin;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@BeforeAll
	public void start() {

		usuarioAdmin = new Usuario(0L, "Adiministrador", "adm@gmail.com", "adm12345");

		if (!usuarioRepository.findByUsuario(usuarioAdmin.getUsuario()).isPresent()) {

			HttpEntity<Usuario> request = new HttpEntity<Usuario>(usuarioAdmin);
			testRestTemplate.exchange("/usuario/cadastro", HttpMethod.POST, request, Usuario.class);
		}

		usuario = new Usuario(0L, "Paulo", "paulo@gmail.com", "123456789");
	}

	@Test
	@Order(1)
	@DisplayName("Cadastrar usuario")
	public void deveRegistrarPostUsuarioF() {

		HttpEntity<Usuario> request = new HttpEntity<Usuario>(usuario);

		ResponseEntity<Usuario> resp = testRestTemplate
				.exchange("/usuario/cadastro", HttpMethod.POST, request, Usuario.class);

		assertEquals(HttpStatus.CREATED, resp.getStatusCode());
	}

	@Test
	@Order(2)
	@DisplayName("Listar todos os usuarios")
	public void deveMostrarTodosUsuarios() {

		ResponseEntity<String> resp = testRestTemplate.withBasicAuth("adm@gmail.com", "adm12345")
				.exchange("/usuario/all", HttpMethod.GET, null, String.class);

		assertEquals(HttpStatus.OK, resp.getStatusCode());
	}
}

package ch08.controller.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class RestApiTestController {
	@RequestMapping("/test/rest")
	public String test() {
		return "rest-test";
	}
}

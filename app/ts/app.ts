import { LivroController } from "./controllers/livrocontroller";

let controller = new LivroController();

document.querySelector('.form').addEventListener('submit',controller.Cadastrar.bind(controller));
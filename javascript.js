document.getElementById("quizForm").addEventListener("submit", function (e) {
      e.preventDefault();

      limparFeedback();

      const respostas = capturarRespostas();
      const valido = validarRespostas(respostas);

      if (valido) {
        const acertos = processarRespostas(respostas);
        mostrarResultado(acertos);
      }
    });

    function limparFeedback() {
      document.getElementById("feedbackCapital").textContent = "";
      document.getElementById("feedbackLinguagem").textContent = "";
      document.getElementById("feedbackAtributo").textContent = "";
      document.getElementById("feedbackNavegadores").textContent = "";
      document.getElementById("resultado").textContent = "";
    }

    function capturarRespostas() {
      return {
        capital: document.querySelector('input[name="capital"]').value.trim(),
        linguagem: document.querySelector('input[name="linguagem"]:checked'),
        atributo: document.querySelector('input[name="atributo"]:checked'),
        navegadores: document.querySelectorAll('input[name="navegadores"]:checked')
      };
    }

    function validarRespostas(respostas) {
      let valido = true;

      if (respostas.capital === "") {
        document.getElementById("feedbackCapital").textContent = "Responda esta pergunta.";
        valido = false;
      }

      if (!respostas.linguagem) {
        document.getElementById("feedbackLinguagem").textContent = "Escolha uma opção.";
        valido = false;
      }

      if (!respostas.atributo) {
        document.getElementById("feedbackAtributo").textContent = "Escolha um atributo.";
        valido = false;
      }

      if (respostas.navegadores.length === 0) {
        document.getElementById("feedbackNavegadores").textContent = "Selecione pelo menos um navegador.";
        valido = false;
      }

      return valido;
    }

    function processarRespostas(respostas) {
      let acertos = 0;

      if (respostas.capital.toLowerCase() === "sao paulo" || respostas.capital.toLowerCase() === "sao paulo" ) {
        acertos++;
      }

      if (respostas.linguagem.value === "Python") {
        acertos++;
      }

      if (respostas.atributo.value === "href") {
        acertos++;
      }

      const selecionados = Array.from(respostas.navegadores).map(el => el.value);
      if (
        selecionados.includes("Chrome") &&
        selecionados.includes("Firefox") &&
        !selecionados.includes("Photoshop")
      ) {
        acertos++;
      }

      return acertos;
    }

    function mostrarResultado(acertos) {
      const mensagem = `Você acertou ${acertos} de 4 perguntas.`;
      document.getElementById("resultado").textContent = mensagem;
    }

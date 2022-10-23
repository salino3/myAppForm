

    //* Versión simple

    (function () {
      let formulario = document.getElementsByName("formulario")[0];

      var validar = function (event) {
        event.preventDefault();
    
// El '.checked' lo debo controlar con el 'Id'
     let Cheking = document.getElementById("terminos").checked;

        if ( Cheking === false) {
          alert("Please accept the 'terms and conditions'");
        } else {
          console.log({
            name: formulario.nombre.value,
            email: formulario.email.value,
            password: formulario.psw.value,
            file: formulario.file.value,
            tel: formulario.tel.value,
            range: formulario.range.value,
            gender: formulario.sexo.value,
            termsAndConditions: formulario.terminos.value,
          });
        }
      };
      formulario.addEventListener("submit", validar);
    })();

// Validation 'tel' 'input'
    var inputEl = document.getElementById("tel");
    var goodKey = "0123456789+ ";

    var checkInputTel = function (e) {
      var key = typeof e.which == "number" ? e.which : e.keyCode;
      var start = this.selectionStart,
        end = this.selectionEnd;

      var filtered = this.value.split("").filter(filterInput);
      this.value = filtered.join("");

      /* Prevents moving the pointer for a bad character */
      var move =
        filterInput(String.fromCharCode(key)) || key == 0 || key == 8 ? 0 : 1;
      this.setSelectionRange(start - move, end - move);
    };

    var filterInput = function (val) {
      return goodKey.indexOf(val) > -1;
    };

    inputEl.addEventListener("input", checkInputTel);
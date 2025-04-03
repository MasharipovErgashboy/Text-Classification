  const ijobiySozlar = ["yaxshi", "zo'r", "chiroyli", "ajoyib", "samimiy"];
      const salbiySozlar = ["yomon", "qo'rqinchli", "xunuk", "yaramas", "qoniqarsiz"];

      function classifyMatn(matn) {
        let ijobiySanash = 0;
        let salbiySanash = 0;

        const sozlar = matn.toLowerCase().split(/\s+/);

        sozlar.forEach((soz) => {
          if (ijobiySozlar.includes(soz)) {
            ijobiySanash++;
          } else if (salbiySozlar.includes(soz)) {
            salbiySanash++;
          }
        });

        if (ijobiySanash > salbiySanash) {
          return "ijobiy";
        } else if (salbiySanash > ijobiySanash) {
          return "salbiy";
        } else {
          return "neytral";
        }
      }

      document.getElementById("classifyButton").addEventListener("click", () => {
        const inputText = document.getElementById("inputText").value;
        if (!inputText.trim()) {
          document.getElementById("result").textContent = "Iltimos, matn kiriting!";
          document.getElementById("result").style.color = "red";
          return;
        }

        const label = classifyMatn(inputText);
        document.getElementById("result").textContent = `Matn: "${inputText}" → Javob: ${label}`;
        document.getElementById("result").style.color =
          label === "ijobiy"
            ? "green"
            : label === "salbiy"
            ? "red"
            : "orange";
      });

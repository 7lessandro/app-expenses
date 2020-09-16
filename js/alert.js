if(despesa.validarDados()) {
        bd.gravar(despesa)
        //dialog de sucesso
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Despesa gerada <br> com sucesso'
          })
               
    } else {
        // error dialog
        Swal.fire({
            icon: 'warning',
            title: 'Erro de Gravação',
            text: 'Preencha todos os dados corretamente',
          })
    }
}
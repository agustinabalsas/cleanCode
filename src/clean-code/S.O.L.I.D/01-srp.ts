/* 
    En esta clase se paso de tener una clase única que realizaba distintas acciones, a 3 clases, 
cada una con una responsabilidad única. 

    Puede aplicarse a módulo o funciones.

    *Detectar violaciones de SRP
*/

(() => {
  interface Product {
    id: number;
    name: string;
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  class Mailer {
    private masterEmail: string = "agustinabalsasm@outlook.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  //esto es lo visible
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["agus@gmail.com"], "to-clients");
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const cartBloc = new CartBloc();
  const productBloc = new ProductBloc(productService, mailer);

  cartBloc.addToCart(10);
  productBloc.notifyClients();
  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
})();

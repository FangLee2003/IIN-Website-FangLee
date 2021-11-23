import "./css/App.css";
import Regist from "./script.js"; //import *
import logo from "./assets/logo2.png";
import tiktok1 from "./assets/tiktok1.png";
import tiktok2 from "./assets/tiktok2.png";
import tiktok3 from "./assets/tiktok3.png";
import tiktok4 from "./assets/tiktok4.png";
import tiktok8 from "./assets/tiktok8.png";
import tiktok6 from "./assets/tiktok6.png";
import tiktok7 from "./assets/tiktok7.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        CÁC BÍ THUẬT ĐỂ IELTS LISTENING KHÔNG CÒN LÀ NỖI LO
      </header>
      <div class="container-fluid">
        <ul className="nav fixed-top nav-tabs">
          <a class="navbar-brand" href="http://localhost:3000/">
            <img class="logo" src={logo} width="30" height="30" alt="IIN logo" />
          </a>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="http://localhost:3000/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.facebook.com/groups/869295393950632/?hoisted_section_header_type=recently_seen&multi_permalinks=884136769133161"
            >
              Facebook
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://vt.tiktok.com/ZSe2XFG4j">
              Tiktok
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="http://localhost:3000/" role="button" aria-expanded="false">Skills</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="http://localhost:3000/">Listening</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/">Reading</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/">Writing</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/">Speaking</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="http://localhost:3000/">Disabled</a>
          </li>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Enter search" aria-label="Search" />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </ul>
      </div>
      <div className="content">
        <section className="section">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={tiktok6} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={tiktok7} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={tiktok6} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="container">
            <div class="row row-cols-2">
              <span class="border border-success">
                <div class="col">
                  <img src={tiktok8} class = "horizontalImage"/>
                </div>
                </span>
                <span class="border border-success">
                <div class="col">
                  <h2>Nếu bị lỡ các đáp án</h2>
                  <p>Hãy bình tĩnh chuyển ngay sang câu tiếp theo nếu bạn không muốn lỡ mất cả những phần kế tiếp. Cách xử lý tốt nhất là hãy đánh dấu vào câu đó để tránh khi chép đáp án bị nhầm và đến ngay với bí kíp thứ 4.
                  </p>
                </div>
                <div class="d-grid mx-auto">
                <button type="button" class="btn btn-outline-success">Success</button>
                </div>
              </span>
            </div>
          </div>
        </section>
        <aside className="aside">
          <h2>Có thể bạn quan tâm</h2>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card border-danger mb-3" >
                  <img src={tiktok1} class="card-img-right" alt="tiktok5" />
                  <div class="card-body">
                    <h5 class="card-title">Cảnh sát chính tả</h5>
                    <p class="card-text"> Chẳng còn gì tiếc hơn khi em mất một điểm vì sai chính tả dù đã nghe rất rõ đáp án...</p>
                    <a href="https://www.tiktok.com/@ieltsilgt/video/7025121786777963803?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706" class="btn btn-outline-danger">Khai sáng ngay</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-info mb-3" >
                  <img src={tiktok2} class="card-img-right" alt="tiktok5" />
                  <div class="card-body">
                    <h5 class="card-title">Chú ý giới hạn từ</h5>
                    <p class="card-text"> Các từ có dấu gạch ngang ở giữa như “𝑒𝑎𝑠𝑦-𝑔𝑜𝑖𝑛𝑔” sẽ
                      được tính là “𝑎 𝑤𝑜𝑟𝑑” hay “1988”, “033486742” được coi là “𝑎 𝑛𝑢𝑚𝑏𝑒𝑟”,...</p>
                    <a href="https://www.tiktok.com/@ieltsilgt/video/7026715483982368001?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706" class="btn btn-outline-info">Khai sáng ngay</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-dark mb-3" >
                  <img src={tiktok3} class="card-img-right" alt="tiktok5" />
                  <div class="card-body">
                    <h5 class="card-title">Say No với đa nhiệm</h5>
                    <p class="card-text"> Sẽ rất tai hại nếu bạn cố gắng trở thành một
                      Multitasker trong phòng thi Listening...</p>
                    <a href="https://www.tiktok.com/@ieltsilgt/video/7027105837197954330?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706" class="btn btn-outline-dark">Khai sáng ngay</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-warning mb-3" >
                  <img src={tiktok4} class="card-img-right" alt="tiktok5" />
                  <div class="card-body">
                    <h5 class="card-title">Võ đoán</h5>
                    <p class="card-text"> Nếu đã không thể nghe được đáp án, vậy hãy dành những phút cuối của
                      phần thi để dùng mẹo này để tăng cơ hội lấy điểm...</p>
                    <a href="https://www.tiktok.com/@ieltsilgt/video/7027431166038789403?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706" class="btn btn-outline-warning">Khai sáng ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <form className="row g-3 needs-validation" novalidate>
        <div className="registform">
          <div className="col-mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-mb-3">
            <label for="validationCustomUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col-mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-mb-3">
            <label for="validationCustom04" className="form-label">Your native language:</label>
            <select className="form-select" id="validationCustom04" required>
              <option value="1">Vietnamese</option>
              <option value="2">Chinese</option>
              <option value="3">English</option>
            </select>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
              <label className="form-check-label" for="invalidCheck">
                Receive news
              </label>
            </div>
          </div>
          <div className="col-12">
            <div align="right">
              <input type="submit" id="registerbutton" defaultValue="Register" onSubmit={Regist} />
            </div>
          </div>
        </div>
      </form>
      <footer className="footer">Footer</footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;

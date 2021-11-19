import "./App.scss";
import Regist from "./script.js"; //import *
import logo from "./assets/logo.png";
import tiktok1 from "./assets/tiktok1.png";
import tiktok2 from "./assets/tiktok2.png";
import tiktok3 from "./assets/tiktok3.png";
import tiktok4 from "./assets/tiktok4.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src={logo} width="100px" height="100px" alt="IIN logo" />
          </a>
        </div>
      </header>
      <ul className="nav nav-tabs">
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
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Skills</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Listening</a></li>
            <li><a className="dropdown-item" href="#">Reading</a></li>
            <li><a className="dropdown-item" href="#">Writing</a></li>
            <li><a className="dropdown-item" href="#">Speaking</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </ul>
      <header className="header">
        CÁC BÍ THUẬT ĐỂ IELTS LISTENING KHÔNG CÒN LÀ NỖI LO
      </header>
      <div className="content">
        <section className="section">
          <h2>⭐Chú ý giới hạn từ</h2>
          Tuy đơn giản nhưng không ít thí sinh đã đánh rơi điểm ở ngay những câu
          dễ nhất vì giới hạn từ. Ngoài việc đọc kĩ đề, có những quy tắc ta cần
          ghi nhớ ví dụ như các từ có dấu gạch ngang ở giữa như “𝑒𝑎𝑠𝑦-𝑔𝑜𝑖𝑛𝑔” sẽ
          được tính là “𝑎 𝑤𝑜𝑟𝑑” hay “1988”, “033486742” được coi là “𝑎 𝑛𝑢𝑚𝑏𝑒𝑟”,
          ...
          <h2>⭐Bật mode Cảnh sát chính tả</h2>
          Chẳng còn gì tiếc hơn khi em mất một điểm vì sai chính tả dù đã nghe
          rất rõ đáp án. Ví dụ như “𝑏𝑜𝑜𝑡𝑠” thành “𝑏𝑜𝑜𝑠𝑡”, “𝑠𝑒𝑣𝑒𝑛𝑡𝑦” thành
          “𝑠𝑒𝑣𝑒𝑛𝑡𝑒𝑒𝑛” hay viết “𝑔𝑜𝑟𝑣𝑒𝑟𝑚𝑒𝑛𝑡” thay vì “𝑔𝑜𝑣𝑒𝑟𝑛𝑚𝑒𝑛𝑡”. Quên chia số
          nhiều, quên chia thì hay viết tắt cũng là các lỗi chính tả cần tránh.
          Vậy nên hãy kiểm tra lại ngữ cảnh, nhìn lại các vế trước sau để điền
          đáp án sao cho chính xác nhé.
          <h2>⭐Bình tĩnh nếu bị lỡ các đáp án</h2>
          Nếu ta phát hiện đã bị lỡ mất một câu thì việc cần làm là gì? Hoảng
          loạn? Cố gắng nhớ lại ư? Không! Đừng làm vậy, hãy bình tĩnh chuyển
          ngay sang câu tiếp theo, mất một điểm không phải là vấn đề lớn, vấn đề
          lớn hơn là nếu ta dừng lại ở câu đó, ta sẽ có nguy cơ cao lỡ mất cả
          những phần kế tiếp. Cách xử lý tốt nhất là hãy đánh dấu vào câu đó để
          tránh khi chép đáp án bị nhầm và đến ngay với bí kíp thứ 4.
          <h2>⭐Võ đoán</h2>
          Nếu đã không thể nghe được đáp án, vậy hãy dành những phút cuối của
          phần thi đoán xem từ đó là gì để tăng cơ hội lấy điểm. Chớ có để trống
          đáp án trong Answer Sheet nhé.
          <h2>⭐Say No với đa nhiệm</h2>
          Vừa đọc đề bài kế tiếp vừa tranh thủ chép lại đáp án? Vừa nghe vừa
          nhẩm tính số điểm của mình? Vừa nghe vừa quay lại check các đáp đáp án
          trước? Hậu quả sẽ rất tai hại nếu bạn cố gắng trở thành một
          Multitasker trong phòng thi Listening. Đừng vội vã, đừng hoảng hốt,
          hãy cố gắng bắt kịp bài nghe và tập trung làm theo yêu cầu vì còn 10
          phút cuối để lật lại phần bài trước và số điểm các câu hỏi đều như
          nhau.
          <h2>⭐Ngòi bút là vũ khí</h2>
          Dành riêng riêng cho các bài Map, hãy vẽ ngay một bản đồ với bốn hướng
          cơ bản và dùng chính ngón tay hoặc ngòi bút di chuyển theo lời chỉ dẫn
          để tránh những sai lầm trong phần thi đầy cạm bẫy này.
          <h2>⭐Cẩn thận, cẩn thận, cẩn thận</h2>
          Điều quan trọng nhắc lại ba lần, nhất là khi ở trong phòng thi thật.
          Hãy chắc chắn rằng mình check thật kĩ đáp án và viết thật cẩn thận.
          Đừng để vết tẩy xoá nham nhở, viết nhầm sang mặt giấy khác hay tự ý
          viết vào những phần không không được phép. Rèn cho mình sự cẩn thận cả
          khi luyện đề để không mắc sai lầm trong lúc thi. Hi vọng những bí kíp
          này sẽ giúp bạn đạt kết quả tốt hơn trong qua quá trình học và thi
          IELTS. Hẹn gặp lại mọi người ở những bài viết sau.🍀
        </section>
        <aside className="aside">
          <h2>Có thể bạn quan tâm</h2>
          <div id="gallery">
            <div>
              <a href="https://www.tiktok.com/@ieltsilgt/video/7025121786777963803?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706">
                <img src={tiktok1} alt="IIN tiktok" />
              </a>
            </div>
            <div>
              <a href="https://www.tiktok.com/@ieltsilgt/video/7026715483982368001?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706">
                <img src={tiktok2} alt="IIN tiktok" />
              </a>
            </div>
            <div>
              <a href="https://www.tiktok.com/@ieltsilgt/video/7027105837197954330?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706">
                <img src={tiktok3} alt="IIN tiktok" />
              </a>
            </div>
            <div>
              <a href="https://www.tiktok.com/@ieltsilgt/video/7027431166038789403?_d=secCgYIASAHKAESPgo8x%2BarbzftldKhwFXVkPVk09zFNdtELOVzlz4YyCFEO1abSsfNMyWJr%2FcJO0nsZyAqxiYRk1tTQ0vl%2B2kvGgA%3D&checksum=bef0f43b9e5cb564366e8c3042a4cfe2d1468b390da54d35006715c3f67de055&language=vi&sec_uid=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&sec_user_id=MS4wLjABAAAA22AEsiIlASeoGVGWCHbf-H150iwxGi2hlyACmZJ8BGjOg8vPyZdBny0yUwAA5Su8&share_app_id=1180&share_author_id=6996466304165561346&share_link_id=5FFBCB43-211B-4437-BEBC-298D62F4EBAE&tt_from=copy&u_code=dk5me5kh1am160&user_id=6996466304165561346&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_t&_r=1&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7019507004755592706">
                <img src={tiktok4} alt="IIN tiktok" />
              </a>
            </div>
          </div>
        </aside>
      </div>
      <form onSubmit={Regist}>
        <h2>Sign up to receive news</h2>
        <table>
          <tbody>
            <tr>
              <td className="tdLabel">
                <label htmlFor="register_name" className="label">
                  Username:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  defaultValue
                  id="register_name"
                  style={{ width: "90%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="tdLabel">
                <label htmlFor="register_password" className="label">
                  Password:
                </label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="register_password"
                  style={{ width: "90%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="tdLabel">
                <label htmlFor="register_email" className="label">
                  Email:
                </label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  defaultValue
                  id="register_email"
                  style={{ width: "90%" }}
                  required
                />
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td className="tdLabel">
                <label htmlFor="register_language" className="label">
                  Your native language:
                </label>
              </td>
              <td>
                <select
                  name="language"
                  id="register_language"
                  style={{ width: "90%" }}
                  required
                >
                  <option value="vietnamese">vietnamese</option>
                  <option value="english">english</option>
                  <option value="japanese">japanese</option>
                  <option value="chinese">chinese</option>
                  <option value="other">other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="rule"
                  id="rule"
                  defaultValue="rule"
                  required
                />
                <label htmlFor="rule">Agree the terms and conditions</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="news"
                  id="news"
                  defaultValue="news"
                />
                <label htmlFor="news">Received news</label>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div align="right">
                  <input type="submit" id="register" defaultValue="Register" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Your native language:</label>
          <select class="form-select" id="validationCustom04" required>
            <option value="1">Vietnamese</option>
            <option value="2">Chinese</option>
            <option value="3">English</option>
          </select>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <div align="right">
            <input type="submit" id="register" defaultValue="Register" />
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

const quizData = [
        {
          id: 1,
          question: "Activity trong Android là gì?",
          options: [
            {
              text: "Là một thành phần giao diện người dùng trong màn hình",
              correct: false,
            },
            {
              text: "Là các màn hình của ứng dụng, cần được khai báo trong tệp tin Manifest.",
              correct: true,
            },
            {
              text: "Là các đối tượng nhận tin để yêu cầu hành động từ một thành phần ứng dụng khác.",
              correct: false,
            },
            {
              text: "Là một tập tin XML chứa thông tin về giao diện người dùng.",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "Intent trong Android được sử dụng để làm gì?",
          options: [
            { text: "Xử lý các sự kiện chạm trên màn hình.", correct: false },
            { text: "Lưu trữ dữ liệu của ứng dụng.", correct: false },
            {
              text: "Yêu cầu hành động từ một thành phần ứng dụng khác.",
              correct: true,
            },
            { text: "Xác định bố cục giao diện người dùng.", correct: false },
          ],
        },
        {
          id: 3,
          question: "Mục đích chính của việc sử dụng Fragment là gì?",
          options: [
            {
              text: "Tạo hiệu ứng động cho giao diện người dùng.",
              correct: false,
            },
            { text: "Tăng tốc độ xử lý của ứng dụng.", correct: false },
            {
              text: "Tạo ra các ứng dụng có khả năng thích ứng với nhiều kích thước màn hình.",
              correct: true,
            },
            { text: "Giảm dung lượng bộ nhớ của ứng dụng.", correct: false },
          ],
        },
        {
          id: 4,
          question:
            "Câu lệnh nào sau đây được sử dụng để khởi động một Activity mới?",
          options: [
            { text: "startActivity()", correct: true },
            { text: "startFragment()", correct: false },
            { text: "initActivity()", correct: false },
            { text: "createActivity()", correct: false },
          ],
        },
        {
          id: 5,
          question:
            "Vòng đời của một Fragment có liên quan đến vòng đời của Activity chứa nó hay không?",
          options: [
            { text: "Không liên quan.", correct: false },
            { text: "Có liên quan.", correct: true },
            {
              text: "Chỉ liên quan khi Fragment được thêm vào Activity.",
              correct: false,
            },
            {
              text: "Chỉ liên quan khi Fragment bị xóa khỏi Activity.",
              correct: false,
            },
          ],
        },
        {
          id: 6,
          question:
            "Fragment có thể được sử dụng lại trong nhiều Activity khác nhau hay không?",
          options: [
            { text: "Không thể.", correct: false },
            { text: "Có thể.", correct: true },
            {
              text: "Chỉ có thể sử dụng lại khi khai báo Fragment đó trong Manifest.",
              correct: false,
            },
            {
              text: "Chỉ có thể sử dụng lại trong các ứng dụng có cùng package name.",
              correct: false,
            },
          ],
        },
        {
          id: 7,
          question:
            "Tệp tin XML nào được sử dụng để định nghĩa giao diện người dùng của một Fragment?",
          options: [
            { text: "AndroidManifest.xml", correct: false },
            { text: "strings.xml", correct: false },
            { text: "Một tệp tin layout XML.", correct: true },
            { text: "styles.xml", correct: false },
          ],
        },
        {
          id: 8,
          question:
            "Fragment có thể giao tiếp với Activity chứa nó bằng cách nào?",
          options: [
            { text: "Sử dụng Intent.", correct: false },
            {
              text: "Gọi trực tiếp các phương thức của Activity.",
              correct: false,
            },
            { text: "Sử dụng interface.", correct: false },
            { text: "Tất cả các cách trên đều đúng.", correct: true },
          ],
        },
        {
          id: 9,
          question: "Khi xoay màn hình thiết bị, điều gì xảy ra với Fragment?",
          options: [
            { text: "Fragment bị hủy và được tạo lại.", correct: true },
            { text: "Fragment không bị ảnh hưởng.", correct: false },
            { text: "Fragment bị ẩn đi.", correct: false },
            {
              text: "Fragment được thay thế bằng một Fragment khác.",
              correct: false,
            },
          ],
        },
        {
          id: 10,
          question: "Lợi ích của việc sử dụng Fragment là gì?",
          options: [
            { text: "Tăng tính module hóa cho ứng dụng.", correct: false },
            { text: "Cải thiện khả năng tái sử dụng code.", correct: false },
            {
              text: "Tạo ra các giao diện người dùng linh hoạt và phức tạp.",
              correct: false,
            },
            { text: "Tất cả các đáp án trên đều đúng.", correct: true },
          ],
        },
        {
          id: 11,
          question: "Đâu là cách truyền dữ liệu qua Intent?",
          options: [
            { text: "Sử dụng putData()", correct: false },
            { text: "Sử dụng addExtra()", correct: false },
            { text: "Sử dụng putExtra()", correct: true },
            { text: "Sử dụng insertExtra()", correct: false },
          ],
        },
        {
          id: 12,
          question: "Intent Filter được sử dụng để làm gì trong Android?",
          options: [
            {
              text: "Để xác định ứng dụng nào có thể nhận được một Intent cụ thể.",
              correct: true,
            },
            { text: "Để quản lý vòng đời của ứng dụng.", correct: false },
            { text: "Để lưu trữ dữ liệu tạm thời.", correct: false },
            { text: "Để tối ưu hóa giao diện của ứng dụng.", correct: false },
          ],
        },
        {
          id: 13,
          question:
            "Thành phần nào sau đây KHÔNG phải là một Android core component?",
          options: [
            { text: "Activity", correct: false },
            { text: "Service", correct: false },
            { text: "Fragment", correct: true },
            { text: "BroadcastReceiver", correct: false },
          ],
        },
        {
          id: 14,
          question:
            "Tệp tin nào dùng để khai báo các Activity và Intent Filter?",
          options: [
            { text: "build.gradle", correct: false },
            { text: "AndroidManifest.xml", correct: true },
            { text: "settings.gradle", correct: false },
            { text: "layout.xml", correct: false },
          ],
        },
        {
          id: 15,
          question:
            "Phương thức vòng đời nào của Activity được gọi khi Activity bắt đầu hiển thị?",
          options: [
            { text: "onCreate()", correct: false },
            { text: "onStart()", correct: true },
            { text: "onResume()", correct: false },
            { text: "onRestart()", correct: false },
          ],
        },
        {
          id: 16,
          question: "Phương thức nào dùng để gắn Fragment vào Activity động?",
          options: [
            { text: "FragmentTransaction.add()", correct: true },
            { text: "FragmentManager.start()", correct: false },
            { text: "Fragment.attach()", correct: false },
            { text: "Fragment.create()", correct: false },
          ],
        },
        {
          id: 17,
          question: "Bundle trong Android thường dùng để làm gì?",
          options: [
            { text: "Vẽ giao diện", correct: false },
            {
              text: "Lưu và truyền dữ liệu giữa các Activity/Fragment",
              correct: true,
            },
            { text: "Quản lý luồng", correct: false },
            { text: "Kết nối mạng", correct: false },
          ],
        },
        {
          id: 18,
          question: "Phương thức nào của Fragment được gọi để inflate layout?",
          options: [
            { text: "onCreate()", correct: false },
            { text: "onCreateView()", correct: true },
            { text: "onStart()", correct: false },
            { text: "onAttach()", correct: false },
          ],
        },
        {
          id: 19,
          question: "Explicit Intent thường dùng trong trường hợp nào?",
          options: [
            { text: "Gọi Activity trong cùng ứng dụng", correct: true },
            { text: "Gọi Service của hệ thống", correct: false },
            { text: "Gửi broadcast", correct: false },
            { text: "Mở URL trình duyệt", correct: false },
          ],
        },
        {
          id: 20,
          question: "Implicit Intent thường dựa trên thông tin nào?",
          options: [
            { text: "Class name", correct: false },
            { text: "Action, Data, Category", correct: true },
            { text: "Package name", correct: false },
            { text: "Layout ID", correct: false },
          ],
        },
        {
          id: 21,
          question: "ConstraintLayout là gì?",
          options: [
            {
              text: "Một ViewGroup cho phép tạo layout phức tạp với hệ phân cấp phẳng",
              correct: true,
            },
            { text: "Một widget hiển thị văn bản", correct: false },
            { text: "Một layout chỉ dùng cho tablet", correct: false },
            {
              text: "Một layout thay thế LinearLayout nhưng không dùng được XML",
              correct: false,
            },
          ],
        },
        {
          id: 22,
          question:
            "Ưu điểm chính của ConstraintLayout so với layout lồng nhau là gì?",
          options: [
            {
              text: "Giảm số lượng ViewGroup và tăng hiệu năng",
              correct: true,
            },
            { text: "Dễ viết code Java hơn", correct: false },
            { text: "Không cần XML", correct: false },
            { text: "Không có ưu điểm gì", correct: false },
          ],
        },
        {
          id: 23,
          question: "Mỗi View trong ConstraintLayout tối thiểu cần:",
          options: [
            { text: "2 constraint ngang và 2 constraint dọc", correct: false },
            { text: "1 constraint ngang và 1 constraint dọc", correct: true },
            { text: "1 constraint bất kỳ", correct: false },
            { text: "Không cần constraint", correct: false },
          ],
        },
        {
          id: 24,
          question: "Nếu một View không có constraint khi chạy app, nó sẽ:",
          options: [
            { text: "Không hiển thị", correct: false },
            { text: "Bị crash ứng dụng", correct: false },
            { text: "Về tại vị trí (0,0)", correct: true },
            { text: "Tự căn giữa màn hình", correct: false },
          ],
        },
        {
          id: 25,
          question: "Một constraint biểu diễn:",
          options: [
            { text: "Màu nền của View", correct: false },
            {
              text: "Kết nối hoặc căn chỉnh tới View khác, parent hoặc guideline",
              correct: true,
            },
            { text: "Kích thước View", correct: false },
            { text: "Padding của View", correct: false },
          ],
        },
        {
          id: 26,
          question: "Để dùng ConstraintLayout, cần thêm thư viện nào?",
          options: [
            { text: "androidx.recyclerview:recyclerview", correct: false },
            {
              text: "androidx.constraintlayout:constraintlayout",
              correct: true,
            },
            { text: "com.google.android.material", correct: false },
            { text: "androidx.core", correct: false },
          ],
        },
        {
          id: 27,
          question: "Guideline trong ConstraintLayout có đặc điểm gì?",
          options: [
            { text: "Là View hiển thị đường kẻ", correct: false },
            { text: "Là đường vô hình để ràng buộc View", correct: true },
            { text: "Chỉ đặt theo pixel", correct: false },
            { text: "Chỉ đặt theo phần trăm", correct: false },
          ],
        },
        {
          id: 28,
          question: "Barrier khác Guideline ở điểm nào?",
          options: [
            { text: "Barrier có thể hiển thị", correct: false },
            {
              text: "Barrier có vị trí phụ thuộc các View khác",
              correct: true,
            },
            { text: "Barrier chỉ dùng ngang", correct: false },
            { text: "Barrier không dùng được trong XML", correct: false },
          ],
        },
        {
          id: 29,
          question: "Alignment trong ConstraintLayout dùng để:",
          options: [
            { text: "Căn kích thước các View", correct: false },
            { text: "Căn cạnh hoặc tâm của các View với nhau", correct: true },
            { text: "Đặt màu cho View", correct: false },
            { text: "Xoay View", correct: false },
          ],
        },
        {
          id: 30,
          question: "Baseline alignment dùng để:",
          options: [
            { text: "Căn đáy View", correct: false },
            { text: "Căn đường cơ sở văn bản giữa hai View", correct: true },
            { text: "Căn giữa màn hình", correct: false },
            { text: "Căn theo margin", correct: false },
          ],
        },
        {
          id: 31,
          question: "Parent position là gì?",
          options: [
            { text: "Ràng buộc View với chính nó", correct: false },
            { text: "Ràng buộc View với cạnh của parent", correct: true },
            { text: "Đặt View nằm ngoài layout", correct: false },
            { text: "Xóa constraint", correct: false },
          ],
        },
        {
          id: 32,
          question: "Order position cho phép:",
          options: [
            {
              text: "Đặt thứ tự hiển thị View theo chiều ngang/dọc",
              correct: true,
            },
            { text: "Thay đổi z-index", correct: false },
            { text: "Đổi màu View", correct: false },
            { text: "Đổi font chữ", correct: false },
          ],
        },
        {
          id: 33,
          question: "Match Constraints (0dp) có ý nghĩa:",
          options: [
            { text: "View co giãn theo nội dung", correct: false },
            { text: "View giãn theo constraint", correct: true },
            { text: "View có kích thước cố định", correct: false },
            { text: "View ẩn", correct: false },
          ],
        },
        {
          id: 34,
          question: "Để đặt tỉ lệ 16:9 cho View, cần:",
          options: [
            { text: "wrap_content", correct: false },
            { text: "match_parent", correct: false },
            { text: "match constraints và ratio", correct: true },
            { text: "margin", correct: false },
          ],
        },
        {
          id: 35,
          question: "Infer Constraints dùng để:",
          options: [
            { text: "Xóa constraint", correct: false },
            {
              text: "Tự động tạo constraint dựa trên vị trí hiện tại",
              correct: true,
            },
            { text: "Tạo layout mới", correct: false },
            { text: "Đặt guideline", correct: false },
          ],
        },
        {
          id: 36,
          question: "Autoconnect mặc định:",
          options: [
            { text: "Bật sẵn", correct: true },
            { text: "Tắt", correct: false },
            { text: "Chỉ hoạt động với guideline", correct: false },
            { text: "Chỉ hoạt động với barrier", correct: false },
          ],
        },
        {
          id: 37,
          question: "Mỗi constraint handle có thể dùng cho:",
          options: [
            { text: "Nhiều constraint", correct: false },
            { text: "Một constraint", correct: true },
            { text: "Không giới hạn", correct: false },
            { text: "Chỉ constraint dọc", correct: false },
          ],
        },
        {
          id: 38,
          question: "ConstraintSet dùng để:",
          options: [
            { text: "Tạo widget", correct: false },
            { text: "Thiết lập constraint bằng code", correct: true },
            { text: "Đổi theme", correct: false },
            { text: "Tạo layout XML", correct: false },
          ],
        },
        {
          id: 39,
          question: "Guideline có thể định vị bằng:",
          options: [
            { text: "dp", correct: false },
            { text: "phần trăm", correct: false },
            { text: "dp hoặc phần trăm", correct: true },
            { text: "chỉ px", correct: false },
          ],
        },
        {
          id: 40,
          question:
            "Ưu điểm lớn nhất của ConstraintLayout trong responsive UI là:",
          options: [
            { text: "Ít code Java", correct: false },
            { text: "Linh hoạt với nhiều kích thước màn hình", correct: true },
            { text: "Không cần XML", correct: false },
            { text: "Chỉ dùng cho tablet", correct: false },
          ],
        },
        {
          id: 41,
          question: "Lớp View trong Android có vai trò:",
          options: [
            { text: "Container dữ liệu", correct: false },
            { text: "Hiển thị và xử lý sự kiện UI", correct: true },
            { text: "Kết nối mạng", correct: false },
            { text: "Lưu file", correct: false },
          ],
        },
        {
          id: 42,
          question: "Widgets là:",
          options: [
            { text: "Lớp cha của View", correct: false },
            { text: "Lớp con của View", correct: true },
            { text: "Layout", correct: false },
            { text: "Service", correct: false },
          ],
        },
        {
          id: 43,
          question: "Layout trong Android là:",
          options: [
            { text: "Widget hiển thị", correct: false },
            { text: "Container vô hình chứa View", correct: true },
            { text: "File Java", correct: false },
            { text: "Resource string", correct: false },
          ],
        },
        {
          id: 44,
          question: "LinearLayout sắp xếp View theo:",
          options: [
            { text: "Hình tròn", correct: false },
            { text: "Dòng và cột", correct: false },
            { text: "Ngang hoặc dọc", correct: true },
            { text: "Tự do", correct: false },
          ],
        },
        {
          id: 45,
          question: "Thuộc tính orientation của LinearLayout có giá trị:",
          options: [
            { text: "left, right", correct: false },
            { text: "top, bottom", correct: false },
            { text: "horizontal, vertical", correct: true },
            { text: "center", correct: false },
          ],
        },
        {
          id: 46,
          question: "RelativeLayout cho phép:",
          options: [
            { text: "Đặt View tương đối với nhau", correct: true },
            { text: "Chỉ đặt theo lưới", correct: false },
            { text: "Không dùng id", correct: false },
            { text: "Chỉ đặt theo parent", correct: false },
          ],
        },
        {
          id: 47,
          question: "TableLayout tổ chức View theo:",
          options: [
            { text: "Stack", correct: false },
            { text: "Grid hàng – cột", correct: true },
            { text: "Absolute", correct: false },
            { text: "Flow", correct: false },
          ],
        },
        {
          id: 48,
          question: "FrameLayout thường dùng để:",
          options: [
            { text: "Hiển thị nhiều View chồng nhau", correct: true },
            { text: "Tạo danh sách", correct: false },
            { text: "Tạo lưới", correct: false },
            { text: "Chứa fragment list", correct: false },
          ],
        },
        {
          id: 49,
          question: "ScrollView dùng khi:",
          options: [
            { text: "Nội dung vượt kích thước màn hình", correct: true },
            { text: "Muốn zoom", correct: false },
            { text: "Muốn vẽ đồ thị", correct: false },
            { text: "Muốn hiển thị ảnh", correct: false },
          ],
        },
        {
          id: 50,
          question: "setContentView() dùng để:",
          options: [
            { text: "Load layout XML", correct: true },
            { text: "Load ảnh", correct: false },
            { text: "Kết nối database", correct: false },
            { text: "Tạo Activity", correct: false },
          ],
        },
        {
          id: 51,
          question: "findViewById() dùng để:",
          options: [
            { text: "Tạo View mới", correct: false },
            { text: "Lấy tham chiếu View từ XML", correct: true },
            { text: "Xóa View", correct: false },
            { text: "Đổi layout", correct: false },
          ],
        },
        {
          id: 52,
          question: "Context trong Android cho phép:",
          options: [
            { text: "Truy cập resource và component hệ thống", correct: true },
            { text: "Lưu database", correct: false },
            { text: "Render UI", correct: false },
            { text: "Tạo thread", correct: false },
          ],
        },
        {
          id: 53,
          question: "TextView dùng để:",
          options: [
            { text: "Nhập liệu", correct: false },
            { text: "Hiển thị văn bản", correct: true },
            { text: "Chọn ảnh", correct: false },
            { text: "Phát nhạc", correct: false },
          ],
        },
        {
          id: 54,
          question: "EditText khác TextView ở điểm:",
          options: [
            { text: "Có thể nhập liệu", correct: true },
            { text: "Có màu khác", correct: false },
            { text: "Không hiển thị chữ", correct: false },
            { text: "Không có id", correct: false },
          ],
        },
        {
          id: 55,
          question: "CheckBox là:",
          options: [
            { text: "Nút hai trạng thái", correct: true },
            { text: "Nút ba trạng thái", correct: false },
            { text: "TextView đặc biệt", correct: false },
            { text: "Layout", correct: false },
          ],
        },
        {
          id: 56,
          question: "RadioButton thường đặt trong:",
          options: [
            { text: "LinearLayout", correct: false },
            { text: "RelativeLayout", correct: false },
            { text: "RadioGroup", correct: true },
            { text: "FrameLayout", correct: false },
          ],
        },
        {
          id: 57,
          question: "RadioGroup đảm bảo:",
          options: [
            { text: "Chỉ một RadioButton được chọn", correct: true },
            { text: "Tất cả đều được chọn", correct: false },
            { text: "Không chọn cái nào", correct: false },
            { text: "Chọn ngẫu nhiên", correct: false },
          ],
        },
        {
          id: 58,
          question: "ImageView dùng để:",
          options: [
            { text: "Hiển thị ảnh", correct: true },
            { text: "Phát video", correct: false },
            { text: "Hiển thị text", correct: false },
            { text: "Vẽ hình", correct: false },
          ],
        },
        {
          id: 59,
          question: "setOnClickListener() dùng để:",
          options: [
            { text: "Bắt sự kiện click", correct: true },
            { text: "Đặt text", correct: false },
            { text: "Đặt màu", correct: false },
            { text: "Ẩn View", correct: false },
          ],
        },
        {
          id: 60,
          question: "Thuộc tính margin dùng để:",
          options: [
            { text: "Tạo khoảng cách ngoài View", correct: true },
            { text: "Tạo khoảng cách trong View", correct: false },
            { text: "Đặt màu", correct: false },
            { text: "Đặt text", correct: false },
          ],
        },
      ];
const quizSets = [
  {
    title: "Đề 1",
    questions: quizData,
  },
  {
    title: "Đề 2",
    questions: createSecondQuizData(),
  },
];

let currentQuizIndex = 0;
let currentQuizData = quizSets[currentQuizIndex].questions;
let displayedQuestions = [...currentQuizData];
let answers = new Map();
let hasSubmitted = false;

const quizNav = document.getElementById("quizNav");
const questionList = document.getElementById("questionList");
const totalCount = document.getElementById("totalCount");
const answeredCount = document.getElementById("answeredCount");
const correctCount = document.getElementById("correctCount");
const scorePercent = document.getElementById("scorePercent");
const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const shuffleBtn = document.getElementById("shuffleBtn");
const gradeBtn = document.getElementById("gradeBtn");
const resetBtn = document.getElementById("resetBtn");

function createQuestion(id, question, options, correctIndex) {
  return {
    id,
    question,
    options: options.map((text, index) => ({
      text,
      correct: index === correctIndex,
    })),
  };
}

function createSecondQuizData() {
  return [
    createQuestion(1, "ListView trong Android chủ yếu dùng để làm gì?", ["Hiển thị một view đơn", "Hiển thị danh sách dữ liệu có thể cuộn", "Hiển thị hình ảnh toàn màn hình", "Quản lý vòng đời Activity"], 1),
    createQuestion(2, "Thành phần nào đóng vai trò trung gian giữa dữ liệu và ListView?", ["ViewHolder", "Adapter", "Fragment", "LayoutInflater"], 1),
    createQuestion(3, "ArrayAdapter thường được dùng tốt nhất cho loại dữ liệu nào?", ["Object phức tạp", "Cursor", "String hoặc kiểu đơn giản", "Bitmap"], 2),
    createQuestion(4, "Phương thức nào cần override khi tạo Custom Adapter?", ["onCreate()", "onBind()", "getView()", "setAdapter()"], 2),
    createQuestion(5, "File XML nào định nghĩa giao diện cho mỗi dòng trong ListView tùy biến?", ["activity_main.xml", "AndroidManifest.xml", "item_layout.xml", "styles.xml"], 2),
    createQuestion(6, "Sự kiện click vào một dòng ListView được xử lý bằng?", ["setOnClickListener()", "setOnItemClickListener()", "onTouchEvent()", "onLongClick()"], 1),
    createQuestion(7, "ArrayAdapter kế thừa trực tiếp từ lớp nào?", ["View", "RecyclerView.Adapter", "BaseAdapter", "Context"], 2),
    createQuestion(8, "ListView có đặc điểm nào sau đây?", ["Không cuộn được", "Chỉ hiển thị dữ liệu nhỏ", "Có thể hiển thị tập dữ liệu lớn", "Không hỗ trợ click"], 2),
    createQuestion(9, "Khi dữ liệu là object tự định nghĩa, ArrayAdapter cần gì để hiển thị đúng?", ["Serializable", "Parcelable", "Override toString()", "Cloneable"], 2),
    createQuestion(10, "ListView nằm trong nhóm widget nào?", ["Text", "Layout", "Containers", "Animations"], 2),
    createQuestion(11, "RecyclerView khác ListView ở điểm nào?", ["Không cần Adapter", "Hiệu năng cao hơn, linh hoạt hơn", "Không cuộn được", "Không dùng LayoutManager"], 1),
    createQuestion(12, "Spinner trong Android dùng để làm gì?", ["Hiển thị ảnh", "Hiển thị danh sách chọn thả xuống", "Cuộn ngang", "Phát nhạc"], 1),
    createQuestion(13, "GridView phù hợp nhất khi hiển thị?", ["Văn bản dài", "Form nhập liệu", "Dữ liệu dạng lưới (ảnh, icon)", "Menu hệ thống"], 2),
    createQuestion(14, "Adapter có nhiệm vụ chính là gì?", ["Lưu dữ liệu", "Quản lý Activity", "Chuyển dữ liệu thành View", "Điều hướng màn hình"], 2),
    createQuestion(15, "ListView có thể hiển thị mỗi dòng gồm?", ["Chỉ TextView", "Chỉ ImageView", "Text và Image", "Chỉ Button"], 2),
    createQuestion(16, "Khi click vào item, vị trí item được truyền qua biến nào?", ["view", "parent", "position", "id"], 2),
    createQuestion(17, "Custom Adapter thường dùng khi nào?", ["Chỉ có String", "Không cần layout", "Item có nhiều thành phần UI", "Không có dữ liệu"], 2),
    createQuestion(18, "ListView có thể đặt trong layout nào sau đây?", ["ConstraintLayout", "LinearLayout", "RelativeLayout", "Tất cả đều đúng"], 3),
    createQuestion(19, "Phương thức setAdapter() dùng để?", ["Tạo Adapter", "Gán Adapter cho ListView", "Xóa Adapter", "Cập nhật dữ liệu"], 1),
    createQuestion(20, "ListView là widget phổ biến nhất để?", ["Nhập liệu", "Vẽ đồ họa", "Hiển thị danh sách dữ liệu", "Điều hướng"], 2),
    createQuestion(21, "HorizontalScrollView cho phép cuộn theo hướng nào?", ["Trên - dưới", "Trái - phải", "Chéo", "Không cuộn"], 1),
    createQuestion(22, "HorizontalScrollView thường chứa bao nhiêu View con trực tiếp?", ["Không giới hạn", "2", "1", "4"], 2),
    createQuestion(23, "HorizontalScrollView thường dùng để hiển thị?", ["Form nhập", "Danh sách lựa chọn nhỏ", "Văn bản dài", "Bản đồ"], 2),
    createQuestion(24, "Widget nào thường đặt bên trong HorizontalScrollView?", ["ConstraintLayout", "LinearLayout", "FrameLayout", "Tất cả đều đúng"], 1),
    createQuestion(25, "Hành động người dùng với HorizontalScrollView gồm?", ["Zoom", "Scroll và Click", "Drag & Drop", "Rotate"], 1),
    createQuestion(26, "HorizontalScrollView kế thừa từ lớp nào?", ["View", "ViewGroup", "ScrollView", "FrameLayout"], 2),
    createQuestion(27, "Khi muốn tạo item động trong HorizontalScrollView, ta thường dùng?", ["XML tĩnh", "LayoutInflater", "Intent", "Manifest"], 1),
    createQuestion(28, "HorizontalScrollView phù hợp nhất cho UI nào?", ["Danh sách dài", "Menu ngang, chọn màu", "Bảng dữ liệu", "Biểu đồ"], 1),
    createQuestion(29, "Trong ví dụ chọn màu, click vào item sẽ làm gì?", ["Đổi background Activity", "Đổi textColor của TextView", "Thoát app", "Mở Activity mới"], 0),
    createQuestion(30, "Để tạo hiệu ứng bo tròn cho Button, dùng resource nào?", ["animation", "color", "shape drawable", "layout"], 2),
    createQuestion(31, "HorizontalScrollView thường đặt ở đâu trên màn hình?", ["Dưới cùng", "Bên trái", "Trên cùng", "Bất kỳ vị trí nào"], 3),
    createQuestion(32, "Thuộc tính nào xác định chiều cao HorizontalScrollView?", ["layout_width", "layout_height", "padding", "margin"], 1),
    createQuestion(33, "Để thêm View vào layout trong code, dùng hàm?", ["setView()", "addView()", "inflateView()", "createView()"], 1),
    createQuestion(34, "ConstraintSet được dùng để?", ["Tạo Activity", "Gán Adapter", "Ràng buộc layout động", "Xử lý sự kiện"], 2),
    createQuestion(35, "HorizontalScrollView phù hợp với dữ liệu nào?", ["Rất lớn", "Ít item, trực quan", "Text dài", "Database"], 1),
    createQuestion(36, "Button trong HorizontalScrollView thường dùng để?", ["Submit form", "Điều hướng", "Chọn một tùy chọn", "Nhập liệu"], 2),
    createQuestion(37, "Background của Button có thể thay đổi bằng?", ["setText()", "setColorFilter()", "GradientDrawable", "Intent"], 2),
    createQuestion(38, "HorizontalScrollView không phù hợp cho?", ["Gallery nhỏ", "Thanh chọn màu", "Danh sách hàng trăm item", "Menu ngang"], 2),
    createQuestion(39, "ScrollView và HorizontalScrollView khác nhau ở?", ["Số View con", "Hướng cuộn", "Adapter", "Context"], 1),
    createQuestion(40, "HorizontalScrollView thuộc nhóm widget nào?", ["Text", "Containers", "Animations", "Input"], 1),
    createQuestion(41, "Resources trong Android được tích hợp vào app khi nào?", ["Runtime", "Compile time", "Install time", "Debug time"], 1),
    createQuestion(42, "Thư mục nào chứa layout XML?", ["res/drawable", "res/layout", "res/raw", "assets"], 1),
    createQuestion(43, "Lớp R trong Android dùng để?", ["Chạy app", "Truy cập resource", "Quản lý Activity", "Xử lý network"], 1),
    createQuestion(44, "File strings.xml nằm trong thư mục nào?", ["res/raw", "res/layout", "res/values", "assets"], 2),
    createQuestion(45, "Để đọc file trong res/raw, dùng hàm?", ["openFileInput()", "resources.openRawResource()", "FileInputStream()", "AssetManager.open()"], 1),
    createQuestion(46, "Fonts thường được đặt trong thư mục nào?", ["res/fonts", "assets/fonts", "res/raw", "res/values"], 1),
    createQuestion(47, "Hàm tạo Typeface từ font trong assets là?", ["Typeface.create()", "Typeface.fromFile()", "Typeface.createFromAsset()", "Font.create()"], 2),
    createQuestion(48, "SharedPreferences lưu dữ liệu theo dạng?", ["Object", "JSON", "Key - Value", "XML Layout"], 2),
    createQuestion(49, "Giá trị trong SharedPreferences phải là?", ["Object", "List", "Primitive type", "Class"], 2),
    createQuestion(50, "File SharedPreferences được lưu ở đâu?", ["/sdcard", "/assets", "/data/data/package/shared_prefs", "/res"], 2),
    createQuestion(51, "getSharedPreferences() dùng khi?", ["Chỉ dùng trong Activity", "Cần nhiều file preference", "Không có Context", "Lưu database"], 1),
    createQuestion(52, "Internal storage có đặc điểm nào?", ["App khác truy cập được", "Dùng cho dữ liệu nhạy cảm", "Không an toàn", "Luôn cần permission"], 1),
    createQuestion(53, "External storage cần gì để truy cập?", ["Adapter", "Intent", "Permission", "Fragment"], 2),
    createQuestion(54, "Permission đọc SD card là?", ["READ_FILE", "READ_EXTERNAL_STORAGE", "ACCESS_FILE", "FILE_READ"], 1),
    createQuestion(55, "openFileOutput() dùng để?", ["Đọc file internal", "Ghi file internal", "Đọc SD card", "Ghi database"], 1),
    createQuestion(56, "Dữ liệu SharedPreferences thường dùng để?", ["Ảnh", "Video", "Lưu trạng thái, cấu hình", "Layout"], 2),
    createQuestion(57, "File trong assets được truy cập bằng?", ["resources", "AssetManager", "FileInputStream", "SQLite"], 1),
    createQuestion(58, "Resource array được định nghĩa trong file nào?", ["strings.xml", "arrays.xml", "styles.xml", "colors.xml"], 1),
    createQuestion(59, "R.string.app_name trỏ tới?", ["Layout", "Image", "String resource", "Font"], 2),
    createQuestion(60, "Preferences phù hợp nhất để lưu?", ["Dữ liệu lớn", "File nhị phân", "Cấu hình nhỏ, đơn giản", "Ảnh HD"], 2),
  ];
}

function renderQuizNav() {
  quizNav.innerHTML = "";

  quizSets.forEach((quizSet, index) => {
    const button = document.createElement("button");
    button.className = "quiz-tab";
    button.type = "button";
    button.innerText = quizSet.title;
    button.classList.toggle("active", index === currentQuizIndex);
    button.setAttribute("aria-current", index === currentQuizIndex ? "page" : "false");
    button.addEventListener("click", () => switchQuiz(index));
    quizNav.appendChild(button);
  });
}

function switchQuiz(index) {
  if (index === currentQuizIndex) {
    return;
  }

  currentQuizIndex = index;
  currentQuizData = quizSets[currentQuizIndex].questions;
  displayedQuestions = [...currentQuizData];
  answers = new Map();
  hasSubmitted = false;
  resultPanel.classList.remove("show");
  renderQuizNav();
  updateSummary();
  renderQuestions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestions() {
  questionList.innerHTML = "";

  displayedQuestions.forEach((question, questionIndex) => {
    const card = document.createElement("section");
    card.className = "question-card";
    card.dataset.questionId = question.id;

    const title = document.createElement("div");
    title.className = "question-title";

    const number = document.createElement("span");
    number.className = "question-number";
    number.innerText = `Câu ${questionIndex + 1}.`;

    const text = document.createElement("span");
    text.innerText = question.question;

    title.append(number, text);
    card.appendChild(title);

    const options = document.createElement("div");
    options.className = "options";

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";
      label.dataset.optionIndex = optionIndex;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${question.id}`;
      radio.value = optionIndex;
      radio.checked = answers.get(question.id) === optionIndex;

      const optionText = document.createElement("span");
      optionText.className = "option-text";
      optionText.innerText = option.text;

      label.append(radio, optionText);
      label.addEventListener("click", () => selectAnswer(question.id, optionIndex));
      options.appendChild(label);
    });

    const feedback = document.createElement("div");
    feedback.className = "question-feedback";

    card.append(options, feedback);
    questionList.appendChild(card);
  });

  refreshSelections();
  if (hasSubmitted) {
    showGrading();
  }
}

function selectAnswer(questionId, optionIndex) {
  answers.set(questionId, optionIndex);
  if (hasSubmitted) {
    hasSubmitted = false;
    resultPanel.classList.remove("show");
  }
  refreshSelections();
  updateSummary();
}

function refreshSelections() {
  document.querySelectorAll(".question-card").forEach((card) => {
    const questionId = Number(card.dataset.questionId);
    const selected = answers.get(questionId);

    card.querySelectorAll(".option").forEach((optionEl) => {
      const optionIndex = Number(optionEl.dataset.optionIndex);
      const checked = selected === optionIndex;
      optionEl.classList.toggle("selected", checked);
      optionEl.classList.remove("correct", "incorrect");
      optionEl.querySelector("input").checked = checked;
    });

    const feedback = card.querySelector(".question-feedback");
    feedback.className = "question-feedback";
    feedback.innerText = "";
  });
}

function updateSummary(score = null) {
  totalCount.innerText = currentQuizData.length;
  answeredCount.innerText = answers.size;

  if (score) {
    correctCount.innerText = score.correct;
    scorePercent.innerText = `${score.percent}%`;
  } else {
    correctCount.innerText = "-";
    scorePercent.innerText = "-";
  }
}

function calculateScore() {
  let correct = 0;

  currentQuizData.forEach((question) => {
    const selected = answers.get(question.id);
    if (selected !== undefined && question.options[selected].correct) {
      correct++;
    }
  });

  return {
    correct,
    answered: answers.size,
    total: currentQuizData.length,
    percent: Math.round((correct / currentQuizData.length) * 100),
  };
}

function showGrading() {
  displayedQuestions.forEach((question) => {
    const card = questionList.querySelector(`[data-question-id="${question.id}"]`);
    const selected = answers.get(question.id);
    const correctIndex = question.options.findIndex((option) => option.correct);
    const feedback = card.querySelector(".question-feedback");

    card.querySelectorAll(".option").forEach((optionEl) => {
      const optionIndex = Number(optionEl.dataset.optionIndex);
      optionEl.classList.toggle("correct", optionIndex === correctIndex);
      optionEl.classList.toggle(
        "incorrect",
        selected !== undefined && optionIndex === selected && optionIndex !== correctIndex,
      );
    });

    feedback.classList.add("show");
    if (selected === undefined) {
      feedback.classList.add("unanswered");
      feedback.innerText = `Chưa chọn đáp án. Đáp án đúng: ${question.options[correctIndex].text}`;
    } else if (selected === correctIndex) {
      feedback.classList.add("correct");
      feedback.innerText = "Đúng.";
    } else {
      feedback.classList.add("incorrect");
      feedback.innerText = `Sai. Đáp án đúng: ${question.options[correctIndex].text}`;
    }
  });
}

function gradeQuiz() {
  const score = calculateScore();
  hasSubmitted = true;
  updateSummary(score);
  showGrading();

  resultTitle.innerText = `Kết quả: ${score.correct}/${score.total} câu đúng (${score.percent}%)`;
  resultText.innerText = `Bạn đã làm ${score.answered}/${score.total} câu. Các câu chưa làm được tính là sai.`;
  resultPanel.classList.add("show");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function shuffleQuestions() {
  displayedQuestions = [...displayedQuestions]
    .map((question) => ({ question, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ question }) => question);

  renderQuestions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetQuiz() {
  answers = new Map();
  hasSubmitted = false;
  resultPanel.classList.remove("show");
  updateSummary();
  renderQuestions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

shuffleBtn.addEventListener("click", shuffleQuestions);
gradeBtn.addEventListener("click", gradeQuiz);
resetBtn.addEventListener("click", resetQuiz);

renderQuizNav();
renderQuestions();
updateSummary();

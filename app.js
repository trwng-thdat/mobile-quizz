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
    question: "Fragment có thể giao tiếp với Activity chứa nó bằng cách nào?",
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
    question: "Tệp tin nào dùng để khai báo các Activity và Intent Filter?",
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
    question: "Ưu điểm lớn nhất của ConstraintLayout trong responsive UI là:",
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
  {
    title: "Đề 3",
    questions: createThirdQuizData(),
  },
  {
    title: "Đề 4",
    questions: createFourthQuizData(),
  },
];

let currentQuizIndex = 0;
let currentQuizData = quizSets[currentQuizIndex].questions;
let displayedQuestions = [...currentQuizData];
let answers = new Map();
let isSubmitted = false;
const answerLabels = ["A", "B", "C", "D"];

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
const bottomGradeBtn = document.getElementById("bottomGradeBtn");
const resultModal = document.getElementById("resultModal");
const modalQuizName = document.getElementById("modalQuizName");
const modalScore = document.getElementById("modalScore");
const modalNote = document.getElementById("modalNote");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalOkBtn = document.getElementById("modalOkBtn");

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
    createQuestion(
      1,
      "ListView trong Android chủ yếu dùng để làm gì?",
      [
        "Hiển thị một view đơn",
        "Hiển thị danh sách dữ liệu có thể cuộn",
        "Hiển thị hình ảnh toàn màn hình",
        "Quản lý vòng đời Activity",
      ],
      1,
    ),
    createQuestion(
      2,
      "Thành phần nào đóng vai trò trung gian giữa dữ liệu và ListView?",
      ["ViewHolder", "Adapter", "Fragment", "LayoutInflater"],
      1,
    ),
    createQuestion(
      3,
      "ArrayAdapter thường được dùng tốt nhất cho loại dữ liệu nào?",
      ["Object phức tạp", "Cursor", "String hoặc kiểu đơn giản", "Bitmap"],
      2,
    ),
    createQuestion(
      4,
      "Phương thức nào cần override khi tạo Custom Adapter?",
      ["onCreate()", "onBind()", "getView()", "setAdapter()"],
      2,
    ),
    createQuestion(
      5,
      "File XML nào định nghĩa giao diện cho mỗi dòng trong ListView tùy biến?",
      [
        "activity_main.xml",
        "AndroidManifest.xml",
        "item_layout.xml",
        "styles.xml",
      ],
      2,
    ),
    createQuestion(
      6,
      "Sự kiện click vào một dòng ListView được xử lý bằng?",
      [
        "setOnClickListener()",
        "setOnItemClickListener()",
        "onTouchEvent()",
        "onLongClick()",
      ],
      1,
    ),
    createQuestion(
      7,
      "ArrayAdapter kế thừa trực tiếp từ lớp nào?",
      ["View", "RecyclerView.Adapter", "BaseAdapter", "Context"],
      2,
    ),
    createQuestion(
      8,
      "ListView có đặc điểm nào sau đây?",
      [
        "Không cuộn được",
        "Chỉ hiển thị dữ liệu nhỏ",
        "Có thể hiển thị tập dữ liệu lớn",
        "Không hỗ trợ click",
      ],
      2,
    ),
    createQuestion(
      9,
      "Khi dữ liệu là object tự định nghĩa, ArrayAdapter cần gì để hiển thị đúng?",
      ["Serializable", "Parcelable", "Override toString()", "Cloneable"],
      2,
    ),
    createQuestion(
      10,
      "ListView nằm trong nhóm widget nào?",
      ["Text", "Layout", "Containers", "Animations"],
      2,
    ),
    createQuestion(
      11,
      "RecyclerView khác ListView ở điểm nào?",
      [
        "Không cần Adapter",
        "Hiệu năng cao hơn, linh hoạt hơn",
        "Không cuộn được",
        "Không dùng LayoutManager",
      ],
      1,
    ),
    createQuestion(
      12,
      "Spinner trong Android dùng để làm gì?",
      [
        "Hiển thị ảnh",
        "Hiển thị danh sách chọn thả xuống",
        "Cuộn ngang",
        "Phát nhạc",
      ],
      1,
    ),
    createQuestion(
      13,
      "GridView phù hợp nhất khi hiển thị?",
      [
        "Văn bản dài",
        "Form nhập liệu",
        "Dữ liệu dạng lưới (ảnh, icon)",
        "Menu hệ thống",
      ],
      2,
    ),
    createQuestion(
      14,
      "Adapter có nhiệm vụ chính là gì?",
      [
        "Lưu dữ liệu",
        "Quản lý Activity",
        "Chuyển dữ liệu thành View",
        "Điều hướng màn hình",
      ],
      2,
    ),
    createQuestion(
      15,
      "ListView có thể hiển thị mỗi dòng gồm?",
      ["Chỉ TextView", "Chỉ ImageView", "Text và Image", "Chỉ Button"],
      2,
    ),
    createQuestion(
      16,
      "Khi click vào item, vị trí item được truyền qua biến nào?",
      ["view", "parent", "position", "id"],
      2,
    ),
    createQuestion(
      17,
      "Custom Adapter thường dùng khi nào?",
      [
        "Chỉ có String",
        "Không cần layout",
        "Item có nhiều thành phần UI",
        "Không có dữ liệu",
      ],
      2,
    ),
    createQuestion(
      18,
      "ListView có thể đặt trong layout nào sau đây?",
      ["ConstraintLayout", "LinearLayout", "RelativeLayout", "Tất cả đều đúng"],
      3,
    ),
    createQuestion(
      19,
      "Phương thức setAdapter() dùng để?",
      [
        "Tạo Adapter",
        "Gán Adapter cho ListView",
        "Xóa Adapter",
        "Cập nhật dữ liệu",
      ],
      1,
    ),
    createQuestion(
      20,
      "ListView là widget phổ biến nhất để?",
      ["Nhập liệu", "Vẽ đồ họa", "Hiển thị danh sách dữ liệu", "Điều hướng"],
      2,
    ),
    createQuestion(
      21,
      "HorizontalScrollView cho phép cuộn theo hướng nào?",
      ["Trên - dưới", "Trái - phải", "Chéo", "Không cuộn"],
      1,
    ),
    createQuestion(
      22,
      "HorizontalScrollView thường chứa bao nhiêu View con trực tiếp?",
      ["Không giới hạn", "2", "1", "4"],
      2,
    ),
    createQuestion(
      23,
      "HorizontalScrollView thường dùng để hiển thị?",
      ["Form nhập", "Danh sách lựa chọn nhỏ", "Văn bản dài", "Bản đồ"],
      2,
    ),
    createQuestion(
      24,
      "Widget nào thường đặt bên trong HorizontalScrollView?",
      ["ConstraintLayout", "LinearLayout", "FrameLayout", "Tất cả đều đúng"],
      1,
    ),
    createQuestion(
      25,
      "Hành động người dùng với HorizontalScrollView gồm?",
      ["Zoom", "Scroll và Click", "Drag & Drop", "Rotate"],
      1,
    ),
    createQuestion(
      26,
      "HorizontalScrollView kế thừa từ lớp nào?",
      ["View", "ViewGroup", "ScrollView", "FrameLayout"],
      2,
    ),
    createQuestion(
      27,
      "Khi muốn tạo item động trong HorizontalScrollView, ta thường dùng?",
      ["XML tĩnh", "LayoutInflater", "Intent", "Manifest"],
      1,
    ),
    createQuestion(
      28,
      "HorizontalScrollView phù hợp nhất cho UI nào?",
      ["Danh sách dài", "Menu ngang, chọn màu", "Bảng dữ liệu", "Biểu đồ"],
      1,
    ),
    createQuestion(
      29,
      "Trong ví dụ chọn màu, click vào item sẽ làm gì?",
      [
        "Đổi background Activity",
        "Đổi textColor của TextView",
        "Thoát app",
        "Mở Activity mới",
      ],
      0,
    ),
    createQuestion(
      30,
      "Để tạo hiệu ứng bo tròn cho Button, dùng resource nào?",
      ["animation", "color", "shape drawable", "layout"],
      2,
    ),
    createQuestion(
      31,
      "HorizontalScrollView thường đặt ở đâu trên màn hình?",
      ["Dưới cùng", "Bên trái", "Trên cùng", "Bất kỳ vị trí nào"],
      3,
    ),
    createQuestion(
      32,
      "Thuộc tính nào xác định chiều cao HorizontalScrollView?",
      ["layout_width", "layout_height", "padding", "margin"],
      1,
    ),
    createQuestion(
      33,
      "Để thêm View vào layout trong code, dùng hàm?",
      ["setView()", "addView()", "inflateView()", "createView()"],
      1,
    ),
    createQuestion(
      34,
      "ConstraintSet được dùng để?",
      ["Tạo Activity", "Gán Adapter", "Ràng buộc layout động", "Xử lý sự kiện"],
      2,
    ),
    createQuestion(
      35,
      "HorizontalScrollView phù hợp với dữ liệu nào?",
      ["Rất lớn", "Ít item, trực quan", "Text dài", "Database"],
      1,
    ),
    createQuestion(
      36,
      "Button trong HorizontalScrollView thường dùng để?",
      ["Submit form", "Điều hướng", "Chọn một tùy chọn", "Nhập liệu"],
      2,
    ),
    createQuestion(
      37,
      "Background của Button có thể thay đổi bằng?",
      ["setText()", "setColorFilter()", "GradientDrawable", "Intent"],
      2,
    ),
    createQuestion(
      38,
      "HorizontalScrollView không phù hợp cho?",
      [
        "Gallery nhỏ",
        "Thanh chọn màu",
        "Danh sách hàng trăm item",
        "Menu ngang",
      ],
      2,
    ),
    createQuestion(
      39,
      "ScrollView và HorizontalScrollView khác nhau ở?",
      ["Số View con", "Hướng cuộn", "Adapter", "Context"],
      1,
    ),
    createQuestion(
      40,
      "HorizontalScrollView thuộc nhóm widget nào?",
      ["Text", "Containers", "Animations", "Input"],
      1,
    ),
    createQuestion(
      41,
      "Resources trong Android được tích hợp vào app khi nào?",
      ["Runtime", "Compile time", "Install time", "Debug time"],
      1,
    ),
    createQuestion(
      42,
      "Thư mục nào chứa layout XML?",
      ["res/drawable", "res/layout", "res/raw", "assets"],
      1,
    ),
    createQuestion(
      43,
      "Lớp R trong Android dùng để?",
      ["Chạy app", "Truy cập resource", "Quản lý Activity", "Xử lý network"],
      1,
    ),
    createQuestion(
      44,
      "File strings.xml nằm trong thư mục nào?",
      ["res/raw", "res/layout", "res/values", "assets"],
      2,
    ),
    createQuestion(
      45,
      "Để đọc file trong res/raw, dùng hàm?",
      [
        "openFileInput()",
        "resources.openRawResource()",
        "FileInputStream()",
        "AssetManager.open()",
      ],
      1,
    ),
    createQuestion(
      46,
      "Fonts thường được đặt trong thư mục nào?",
      ["res/fonts", "assets/fonts", "res/raw", "res/values"],
      1,
    ),
    createQuestion(
      47,
      "Hàm tạo Typeface từ font trong assets là?",
      [
        "Typeface.create()",
        "Typeface.fromFile()",
        "Typeface.createFromAsset()",
        "Font.create()",
      ],
      2,
    ),
    createQuestion(
      48,
      "SharedPreferences lưu dữ liệu theo dạng?",
      ["Object", "JSON", "Key - Value", "XML Layout"],
      2,
    ),
    createQuestion(
      49,
      "Giá trị trong SharedPreferences phải là?",
      ["Object", "List", "Primitive type", "Class"],
      2,
    ),
    createQuestion(
      50,
      "File SharedPreferences được lưu ở đâu?",
      ["/sdcard", "/assets", "/data/data/package/shared_prefs", "/res"],
      2,
    ),
    createQuestion(
      51,
      "getSharedPreferences() dùng khi?",
      [
        "Chỉ dùng trong Activity",
        "Cần nhiều file preference",
        "Không có Context",
        "Lưu database",
      ],
      1,
    ),
    createQuestion(
      52,
      "Internal storage có đặc điểm nào?",
      [
        "App khác truy cập được",
        "Dùng cho dữ liệu nhạy cảm",
        "Không an toàn",
        "Luôn cần permission",
      ],
      1,
    ),
    createQuestion(
      53,
      "External storage cần gì để truy cập?",
      ["Adapter", "Intent", "Permission", "Fragment"],
      2,
    ),
    createQuestion(
      54,
      "Permission đọc SD card là?",
      ["READ_FILE", "READ_EXTERNAL_STORAGE", "ACCESS_FILE", "FILE_READ"],
      1,
    ),
    createQuestion(
      55,
      "openFileOutput() dùng để?",
      ["Đọc file internal", "Ghi file internal", "Đọc SD card", "Ghi database"],
      1,
    ),
    createQuestion(
      56,
      "Dữ liệu SharedPreferences thường dùng để?",
      ["Ảnh", "Video", "Lưu trạng thái, cấu hình", "Layout"],
      2,
    ),
    createQuestion(
      57,
      "File trong assets được truy cập bằng?",
      ["resources", "AssetManager", "FileInputStream", "SQLite"],
      1,
    ),
    createQuestion(
      58,
      "Resource array được định nghĩa trong file nào?",
      ["strings.xml", "arrays.xml", "styles.xml", "colors.xml"],
      1,
    ),
    createQuestion(
      59,
      "R.string.app_name trỏ tới?",
      ["Layout", "Image", "String resource", "Font"],
      2,
    ),
    createQuestion(
      60,
      "Preferences phù hợp nhất để lưu?",
      ["Dữ liệu lớn", "File nhị phân", "Cấu hình nhỏ, đơn giản", "Ảnh HD"],
      2,
    ),
  ];
}

function createFourthQuizData() {
  return [
    createQuestion(
      1,
      "Để xử lý việc chọn một item trong context menu ta cần override hàm nào",
      [
        "onContexItemSelected",
        "onOptionsItemSelected",
        "a và b sai",
        "a và d đúng",
      ],
      2,
    ),
    createQuestion(
      2,
      "Loại layout nào linh động nhất",
      ["RelativeLayout", "LinearLayout", "Table Layout", "a, b, c đều sai"],
      0,
    ),
    createQuestion(
      3,
      "Loại layout nào khuyến cáo không sử dụng",
      ["AbsoluteLayout", "FrameLayout", "LinearLayout", "a, b, và c đều sai"],
      0,
    ),
    createQuestion(
      4,
      "Để đọc nội dung trong SD Card ta cần yêu cầu",
      [
        "WRITE_EXTERNAL_STORAGE",
        "READ_INTERNAL_STORAGE",
        "READ_EXTERNAL_STORAGE",
        "WRITE_INTERNAL_STORAGE",
      ],
      2,
    ),
    createQuestion(
      5,
      "Số lượng cột trong TableLayout được tính toán bởi",
      ["Người lập trình", "Android", "a và b đúng", "a và b sai"],
      1,
    ),
    createQuestion(
      6,
      "Một layout có thể chứa",
      ["Layouts", "Widgets", "Views", "Tất cả đều đúng"],
      3,
    ),
    createQuestion(
      7,
      "Trong LinearLayout thuộc tính nào định hướng",
      ["vertical", "horizontal", "a và b sai", "a và b đúng"],
      3,
    ),
    createQuestion(
      8,
      "Để tận dụng khoảng trống dư thừa trong LinearLayout, nên dùng thuộc tính gì",
      [
        "android:layout_height",
        "android:layout_width",
        "android:layout_weight",
        "tất cả đều đúng",
      ],
      2,
    ),
    createQuestion(
      9,
      "Để truy cập cơ sở dữ liệu SQLite để ghi, ta dùng phương thức",
      [
        "getWritableDatabase()",
        "getReadableDatabase()",
        "getDatabase()",
        "getReadWriteDatabase()",
      ],
      0,
    ),
    createQuestion(
      10,
      "Để thiết lập chế độ cân chỉnh hình ảnh, dùng phương thức nào của ImageView",
      ["setLayoutParams", "setScaleType", "a và b đúng", "a và b sai"],
      1,
    ),
    createQuestion(
      11,
      "Một Activity có thể gọi phương thức setContentView mấy lần",
      ["1", "2", "3", "không giới hạn"],
      3,
    ),
    createQuestion(
      12,
      "Lời gọi nào nằm giữa onCreate và onResume của Activity",
      ["onDestroy", "onStop", "onStart", "onPause"],
      2,
    ),
    createQuestion(
      13,
      "Để ứng dụng Android và trang HTML có thể trao đổi thông tin, ta dùng",
      [
        "browser.addScriptInterface()",
        "brower.sẹtavascriptInterface()",
        "browser.addJavascriptInterface()",
        "a, b, c đều sai",
      ],
      2,
    ),
    createQuestion(
      14,
      "Để kiểm soát các sự kiện bên trong AutoCompleteTextView, ta cài đặt",
      ["OnClickListener", "TextWatcher", "a và b sai", "a và b đúng"],
      3,
    ),
    createQuestion(
      15,
      "Thuộc tính nào của LinearLayout xác định khoảng không giữa các biên widget",
      ["Margin", "padding", "a và b sai", "a và b đúng"],
      1,
    ),
    createQuestion(
      16,
      "Với một tập lựa chọn nhỏ, ta thường dùng",
      ["CheckBox", "ListView", "Spinner", "Tất cả đều đúng"],
      2,
    ),
    createQuestion(
      17,
      "Có bao nhiêu loại chứng thực mà Android hỗ trợ",
      ["1", "2", "3", "4"],
      2,
    ),
    createQuestion(
      18,
      "Webkit dùng để làm gì",
      [
        "Xây dựng trình duyệt",
        "Xây dựng hệ điều hành",
        "a và b đúng",
        "a và b sai",
      ],
      0,
    ),
    createQuestion(
      19,
      "Để kiểm tra xem thiết bị có tồn tại phần cứng hay không, ta dùng phương thức",
      [
        "hasSystemFeature()",
        "checkSystemFeature()",
        "verifySystemFeature()",
        "cả a b c đều sai",
      ],
      0,
    ),
    createQuestion(
      20,
      "Để thực hiện các thao tác cơ bản như trong trình duyệt thông thường, ta cung cấp",
      ["Menu", "Activity mới", "Fragment", "tất cả đều đúng"],
      0,
    ),
    createQuestion(
      21,
      "Các list-based widgets được cung cấp dữ liệu bởi",
      ["DataSource", "DataAdapter", "a và b sai", "a và b đúng"],
      1,
    ),
    createQuestion(
      22,
      "Hàm registerForContextMenu có chức năng gì",
      [
        "Chỉ định widgets nào có context menu",
        "xây dựng context menu",
        "Đăng kí context menu cho activity",
        "a b c đều sai",
      ],
      0,
    ),
    createQuestion(
      23,
      "Khi cần các tài nguyên hình ảnh, ta thêm chúng vào trong thư mục nào",
      ["menu", "layout", "drawable", "values"],
      2,
    ),
    createQuestion(
      24,
      "Ta tạo thư mục font trong thư mục nào để thêm font mới",
      ["values", "assets", "layout", ""],
      1,
    ),
    createQuestion(
      25,
      "Trong Java khi muốn định nghĩa một hằng số ta dùng từ khóa",
      ["const", "final", "a và b đều đúng", "a và b đều sai"],
      1,
    ),
    createQuestion(
      26,
      "Lớp nào sau đây có thể được sử dụng để xử lý chức năng Bluetooth trên thiết bị",
      ["adapter", "bluetoothAdapter", "Manager", "Matcher"],
      1,
    ),
    createQuestion(
      27,
      "Dalvik Virtual Machine (DVM) sử dụng nhân mã nguồn của",
      ["Windows", "Ubuntu", "Linux", "Mac OS"],
      2,
    ),
    createQuestion(
      28,
      "Để tạo một Emulator, bạn cần có AVD. dùng nó để làm gì",
      [
        "Android Virtual Display",
        "Android Virtual Device",
        "Application Virtual Display",
        "Active Virtual Device",
      ],
      1,
    ),
    createQuestion(
      29,
      "Các lớp con trực tiếp của Activity là gì",
      ["OnClick", "ContentResolver", "onCreate", "onSelect"],
      3,
    ),
    createQuestion(
      30,
      "Khi nào ContentProvider được kích hoạt",
      [
        "sử dụng ContentResolver",
        "sử dụng SQLite",
        "sử dụng Intent",
        "a b c đều sai",
      ],
      0,
    ),
  ];
}
function createThirdQuizData() {
  return [
    createQuestion(
      1,
      "Which company originally developed the Android operating system?",
      ["Microsoft", "Apple", "Android Inc.", "IBM"],
      2,
    ),
    createQuestion(
      2,
      "Which component is responsible for managing the layout and positioning of items inside a RecyclerView?",
      ["Adapter", "ViewHolder", "LayoutManager", "DataManager"],
      2,
    ),
    createQuestion(
      3,
      "Which company acquired Android Inc. in 2005?",
      ["Samsung", "Google", "Nokia", "Microsoft"],
      1,
    ),
    createQuestion(
      4,
      "Which Android component is designed to efficiently display large datasets by recycling item views?",
      ["ListView", "RecyclerView", "GridLayout", "ScrollView"],
      1,
    ),
    createQuestion(
      5,
      "What was the first commercially available Android smartphone?",
      ["Samsung Galaxy S", "HTC Dream", "Motorola Droid", "Nexus One"],
      1,
    ),
    createQuestion(
      6,
      "Which type of data structure is commonly used as the data source for a ListView?",
      ["Array or List", "Stack", "Queue", "Tree"],
      0,
    ),
    createQuestion(
      7,
      "In which year was the first Android version officially released?",
      ["2005", "2007", "2008", "2010"],
      2,
    ),
    createQuestion(
      8,
      "Which attribute can be used to remove the divider line between ListView items?",
      [
        'android:dividerHeight = "0dp"',
        'android:noDivider = "true"',
        'android:listDivider = "none"',
        'android:hideDivider = "true"',
      ],
      0,
    ),
    createQuestion(
      9,
      "Which mobile operating system was developed by Apple?",
      ["Android", "Windows Mobile", "iOS", "Symbian"],
      2,
    ),
    createQuestion(
      10,
      "Which widget has largely replaced ListView in modern Android development?",
      ["ScrollView", "RecyclerView", "GridView", "FrameLayout"],
      1,
    ),
    createQuestion(
      11,
      "Before the rise of Android and iOS, which mobile operating system was widely used in Nokia phones?",
      ["Symbian", "Palm OS", "Windows Phone", "BlackBerry OS"],
      0,
    ),
    createQuestion(
      12,
      "Which Android component can be used to improve performance by recycling views in a ListView?",
      [
        "ViewHolder pattern",
        "Intent pattern",
        "Layout pattern",
        "Resource pattern",
      ],
      0,
    ),
    createQuestion(
      13,
      "What is the main programming language traditionally used for Android application development?",
      ["C#", "Java", "Swift", "Ruby"],
      1,
    ),
    createQuestion(
      14,
      "Which method in an Adapter is responsible for creating/returning the view for each item in the list?",
      ["getItem()", "getView()", "getLayout()", "getListItem()"],
      1,
    ),
    createQuestion(
      15,
      "Which of the following is the official IDE recommended for Android development?",
      ["Eclipse", "NetBeans", "Android Studio", "Visual Studio"],
      2,
    ),
    createQuestion(
      16,
      "Which layout file is commonly used to define the appearance of each row in a ListView?",
      ["Row layout", "List layout", "Item layout", "Custom layout"],
      2,
    ),
    createQuestion(
      17,
      "Android applications are typically distributed in which file format?",
      [".exe", ".jar", ".apk", ".app"],
      2,
    ),
    createQuestion(
      18,
      "Which method is used to obtain a reference to a ListView defined in XML?",
      ["findListById()", "getListView()", "findViewById()", "loadList()"],
      2,
    ),
    createQuestion(
      19,
      "Android operating system is primarily based on which kernel?",
      ["Windows Kernel", "Linux Kernel", "UNIX Kernel", "MacOS Kernel"],
      1,
    ),
    createQuestion(
      20,
      "Which parameter in onItemClick() represents the position of the clicked item?",
      ["id", "position", "index", "itemNumber"],
      1,
    ),
    createQuestion(
      21,
      "Which Android architecture layer provides the basic system functionality such as process management and memory management?",
      [
        "Application Framework",
        "Linux Kernel",
        "Android Runtime",
        "Applications",
      ],
      1,
    ),
    createQuestion(
      22,
      "Which method is called when a user selects an item in a ListView?",
      ["onItemClick()", "onClickItem()", "onListSelect()", "onViewClick()"],
      1,
    ),
    createQuestion(
      23,
      "Which Android component is responsible for managing application resources such as strings and layouts?",
      [
        "Resource Manager",
        "Activity Manager",
        "Package Manager",
        "Window Manager",
      ],
      1,
    ),
    createQuestion(
      24,
      "Which listener is used to detect when a user clicks on an item in a ListView?",
      [
        "OnClickListener",
        "OnItemClickListener",
        "OnListClickListener",
        "OnSelectListener",
      ],
      1,
    ),
    createQuestion(
      25,
      "Which Android architecture component is responsible for managing application windows?",
      [
        "Activity Manager",
        "Window Manager",
        "Resource Manager",
        "Package Manager",
      ],
      1,
    ),
    createQuestion(
      26,
      "Which XML tag is used to declare a ListView in a layout file?",
      ["<List>", "<ListView>", "<ViewList>", "<ItemList>"],
      1,
    ),
    createQuestion(
      27,
      "Which Android layer includes the libraries that support web browsing?",
      [
        "Application Framework",
        "Native Libraries",
        "Linux Kernel",
        "Applications",
      ],
      1,
    ),
    createQuestion(
      28,
      "Which method is used to assign an adapter to a ListView?",
      ["setData()", "setList()", "setAdapter()", "loadAdapter()"],
      2,
    ),
    createQuestion(
      29,
      "Which library in Android is used to manage relational databases?",
      ["WebKit", "OpenGL", "SQLite", "Media Framework"],
      1,
    ),
    createQuestion(
      30,
      "Which adapter is commonly used to display an array of strings in a ListView?",
      ["ArrayAdapter", "ListAdapter", "ViewAdapter", "DataAdapter"],
      0,
    ),
    createQuestion(
      31,
      "Which Android architecture component is responsible for managing application permissions and installation?",
      [
        "Activity Manager",
        "Package Manager",
        "Window Manager",
        "Resource Manager",
      ],
      1,
    ),
    createQuestion(
      32,
      "Which class is commonly used to connect data to a ListView?",
      ["Controller", "Adapter", "Handler", "Provider"],
      1,
    ),
    createQuestion(
      33,
      "Which Android architecture layer includes APIs used to build user interface components?",
      [
        "Native Libraries",
        "Linux Kernel",
        "Application Framework",
        "Android Runtime",
      ],
      1,
    ),
    createQuestion(
      34,
      "Which Android UI component is used to display a scrollable list of items?",
      ["GridLayout", "ListView", "LinearLayout", "TextView"],
      1,
    ),
    createQuestion(
      35,
      "Which of the following Android libraries is mainly used for rendering 2D and 3D graphics?",
      ["SQLite", "OpenGL", "Media Framework", "SSL"],
      1,
    ),
    createQuestion(
      36,
      "Which attribute can be used to limit the number of lines displayed in a TextView?",
      [
        "android:maxLines",
        "android:textLines",
        "android:limitLines",
        "android:maxText",
      ],
      1,
    ),
    createQuestion(
      37,
      "Which component is responsible for managing notifications in Android?",
      [
        "Notification Manager",
        "Activity Manager",
        "Package Manager",
        "Window Manager",
      ],
      1,
    ),
    createQuestion(
      38,
      "Which attribute controls the background color of a TextView?",
      [
        "android:textColor",
        "android:background",
        "android:color",
        "android:layoutColor",
      ],
      1,
    ),
    createQuestion(
      39,
      "Which Android architecture layer contains the system applications provided by the device manufacturer?",
      [
        "Native Libraries",
        "Android Runtime",
        "Applications",
        "Application Framework",
      ],
      1,
    ),
    createQuestion(
      40,
      "Which attribute is used to make the text in a TextView appear bold?",
      [
        'android:textStyle = "bold"',
        'android:textFormat = "bold"',
        'android:fontWeight = "bold"',
        'android:style = "bold"',
      ],
      1,
    ),
    createQuestion(
      41,
      "Which Android library is mainly used for playing and recording audio and video?",
      ["Media Framework", "SQLite", "OpenGL", "WebKit"],
      0,
    ),
    createQuestion(
      42,
      "Which method is used to change the text displayed in a TextView programmatically?",
      ["changeText()", "setText()", "updateText()", "modifyText()"],
      1,
    ),
    createQuestion(
      43,
      "Which Android component manages the navigation between different application screens?",
      [
        "Window Manager",
        "Activity Manager",
        "Resource Manager",
        "Notification Manager",
      ],
      1,
    ),
    createQuestion(
      44,
      "Which attribute is used to align the text inside a TextView?",
      [
        "android:gravity",
        "android:layout_gravity",
        "android:textAlign",
        "android:position",
      ],
      1,
    ),
    createQuestion(
      45,
      "Which Android library is responsible for displaying web pages inside applications?",
      ["Media Framework", "SQLite", "WebKit", "OpenGL"],
      1,
    ),
    createQuestion(
      46,
      "Which attribute is used to change the color of text in a TextView?",
      [
        "android:fontColor",
        "android:textColor",
        "android:color",
        "android:labelColor",
      ],
      1,
    ),
    createQuestion(
      47,
      "Which Android architecture layer provides the environment where Java/Kotlin code is executed?",
      ["Android Runtime", "Applications", "Linux Kernel", "Native Libraries"],
      0,
    ),
    createQuestion(
      48,
      "Which attribute is used to change the size of the text in a TextView?",
      [
        "android:textStyle",
        "android:textSize",
        "android:fontSize",
        "android:labelSize",
      ],
      1,
    ),
    createQuestion(
      49,
      "Which Android system component provides access to device features such as camera, sensors, and GPS through standard APIs?",
      [
        "Hardware Abstraction Layer",
        "Activity Manager",
        "Package Manager",
        "Window Manager",
      ],
      0,
    ),
    createQuestion(
      50,
      "Which attribute is used to define the text displayed in a TextView?",
      ["android:value", "android:text", "android:label", "android:content"],
      1,
    ),
    createQuestion(
      51,
      "Which Android component is mainly responsible for handling user interaction through a graphical interface?",
      ["Service", "Activity", "Broadcast Receiver", "Content Provider"],
      1,
    ),
    createQuestion(
      52,
      "Which XML tag is used to create a TextView in an Android layout file?",
      ["<text>", "<TextView>", "<Text>", "<Label>"],
      1,
    ),
    createQuestion(
      53,
      "Which Android component runs in the background without providing a user interface?",
      ["Activity", "Service", "Fragment", "Layout"],
      1,
    ),
    createQuestion(
      54,
      "Which Android UI component is mainly used to display text to the user?",
      ["EditText", "TextView", "Button", "ImageView"],
      1,
    ),
    createQuestion(
      55,
      "Which Android component is designed to respond to system-wide broadcast messages?",
      ["Activity", "Service", "Broadcast Receiver", "Content Provider"],
      1,
    ),
    createQuestion(
      56,
      "Which attribute can be used to automatically focus the EditText when the activity starts?",
      [
        "android:focusable",
        "android:autoFocus",
        "android:focusableInTouchMode",
        "android:requestFocus",
      ],
      1,
    ),
    createQuestion(
      57,
      "Which Android component is primarily used to share data between different applications?",
      ["Activity", "Broadcast Receiver", "Service", "Content Provider"],
      1,
    ),
    createQuestion(
      58,
      "Which method is used to display text programmatically inside an EditText?",
      ["setText()", "showText()", "displayText()", "writeText()"],
      1,
    ),
    createQuestion(
      59,
      "Which mechanism is commonly used for communication between Android components?",
      ["Fragment", "Intent", "Layout", "Manifest"],
      1,
    ),
    createQuestion(
      60,
      "Which attribute can be used to limit the maximum number of characters in an EditText?",
      [
        "android:maxLength",
        "android:textLimit",
        "android:length",
        "android:maxInput",
      ],
      1,
    ),
    createQuestion(
      61,
      "Which method is called first when an Activity is created?",
      ["onStart()", "onResume()", "onCreate()", "onPause()"],
      1,
    ),
    createQuestion(
      62,
      "Which input type is commonly used for password fields in EditText?",
      ["textName", "textPassword", "textLogin", "textSecure"],
      1,
    ),
    createQuestion(
      63,
      "Which Activity lifecycle method is called when the activity becomes visible to the user?",
      ["onCreate()", "onStart()", "onPause()", "onStop()"],
      1,
    ),
    createQuestion(
      64,
      "Which attribute is used to define the type of input expected in an EditText (e.g., number, text, password)?",
      [
        "android:datatype",
        "android:inputType",
        "android:textMode",
        "android:dataInput",
      ],
      1,
    ),
    createQuestion(
      65,
      "Which method is called when the activity starts interacting with the user?",
      ["onStart()", "onResume()", "onCreate()", "onPause()"],
      1,
    ),
    createQuestion(
      66,
      "Which method is used to convert the text from EditText into a String in Java?",
      ["getString()", "valueOf()", "convert()", "toString()"],
      1,
    ),
    createQuestion(
      67,
      "Which lifecycle method is called when another activity comes in front and the current activity loses focus?",
      ["onStop()", "onCreate()", "onDestroy()", "onPause()"],
      1,
    ),
    createQuestion(
      68,
      "Which method is used to retrieve the text entered by the user in an EditText?",
      ["getInput()", "getValue()", "readText()", "getText()"],
      1,
    ),
    createQuestion(
      69,
      "Which lifecycle method is called when an activity is no longer visible to the user?",
      ["onPause()", "onStart()", "onStop()", "onResume()"],
      1,
    ),
    createQuestion(
      70,
      "Which attribute is commonly used to display a hint message inside an EditText field?",
      [
        "android:message",
        "android:placeholder",
        "android:hint",
        "android:textHint",
      ],
      1,
    ),
    createQuestion(
      71,
      "Which lifecycle method is called before an activity is completely removed from memory?",
      ["onDestroy()", "onStop()", "onPause()", "onStart()"],
      1,
    ),
    createQuestion(
      72,
      "Which XML tag is used to create an editable text field in Android?",
      ["<TextInput>", "<InputText>", "<EditText>", "<TextEditor>"],
      1,
    ),
    createQuestion(
      73,
      "Which lifecycle method is called when a stopped activity is about to restart?",
      ["onRestart()", "onCreate()", "onResume()", "onPause()"],
      1,
    ),
    createQuestion(
      74,
      "Which Android UI component allows the user to enter and edit text?",
      ["TextView", "EditText", "Button", "ImageView"],
      1,
    ),
    createQuestion(
      75,
      "What is the main purpose of the Android Manifest file?",
      [
        "Designing UI layouts",
        "Declaring application components and permissions",
        "Writing Java code",
        "Storing application data",
      ],
      1,
    ),
    createQuestion(
      76,
      "Which attribute can be used to assign a click handler directly in an XML layout?",
      [
        "android:onClick",
        "android:clickEvent",
        "android:press",
        "android:event",
      ],
      1,
    ),
    createQuestion(
      77,
      "Which lifecycle method is typically used to initialize components such as buttons or text fields?",
      ["onPause()", "onStart()", "onCreate()", "onStop()"],
      1,
    ),
    createQuestion(
      78,
      "Which type of button allows the user to toggle between two states (ON/OFF)?",
      ["ToggleButton", "RadioButton", "ImageButton", "FloatingButton"],
      1,
    ),
    createQuestion(
      79,
      "Which lifecycle method is commonly used to release resources when the activity is no longer visible?",
      ["onPause()", "onStop()", "onCreate()", "onStart()"],
      1,
    ),
    createQuestion(
      80,
      "Which type of button displays only an image instead of text?",
      ["ToggleButton", "ImageButton", "RadioButton", "SwitchButton"],
      1,
    ),
    createQuestion(
      81,
      "What happens when the user presses the Back button while an activity is running?",
      [
        "The activity is paused only",
        "The activity is restarted",
        "The activity is destroyed and removed from the stack",
        "The activity is duplicated",
      ],
      1,
    ),
    createQuestion(
      82,
      "Which method is used to obtain a reference to a Button defined in an XML layout?",
      ["getButton()", "findViewById()", "getView()", "loadButton()"],
      1,
    ),
    createQuestion(
      83,
      "What structure is used by Android to manage activities?",
      ["Activity Queue", "Activity List", "Activity Tree", "Activity Stack"],
      1,
    ),
    createQuestion(
      84,
      "Which method is used to attach a click listener to a Button?",
      [
        "setListener()",
        "addClickListener()",
        "setOnClickListener()",
        "setClickHandler()",
      ],
      1,
    ),
    createQuestion(
      85,
      "When a new activity starts, what happens to the current activity?",
      [
        "It is deleted immediately",
        "It moves to the background and becomes paused",
        "It is restarted",
        "It becomes a service",
      ],
      1,
    ),
    createQuestion(
      86,
      "Which interface must be implemented to respond to a button click event programmatically?",
      [
        "View.OnClickListener",
        "Button.Listener",
        "ClickHandler",
        "EventListener",
      ],
      1,
    ),
    createQuestion(
      87,
      "Which Android component can continue running even if the application is not visible?",
      ["Activity", "Layout", "Service", "Fragment"],
      1,
    ),
    createQuestion(
      88,
      "Which method is commonly used to handle a button click event in Android?",
      ["onTouch()", "onClick()", "onPress()", "onSelect()"],
      1,
    ),
    createQuestion(
      89,
      "Which Android component does NOT provide a user interface?",
      ["Activity", "Broadcast Receiver", "Fragment", "View"],
      1,
    ),
    createQuestion(
      90,
      "Which attribute is used to define the text displayed on a Button?",
      ["android:value", "android:text", "android:label", "android:caption"],
      1,
    ),
    createQuestion(
      91,
      "What is the main purpose of a layout in an Android application?",
      [
        "To manage application permissions",
        "To manage application lifecycle",
        "To execute background tasks",
        "To define the structure and arrangement of UI elements",
      ],
      1,
    ),
    createQuestion(
      92,
      "Which XML tag is used to create a button in an Android layout file?",
      ["<text>", "<button>", "<Button>", "<btn>"],
      1,
    ),
    createQuestion(
      93,
      "Which Android layout arranges its child views in a single row or column?",
      ["FrameLayout", "LinearLayout", "RelativeLayout", "TableLayout"],
      1,
    ),
    createQuestion(
      94,
      "Which Android UI component is used to perform an action when the user taps it?",
      ["TextView", "ImageView", "Button", "EditText"],
      1,
    ),
    createQuestion(
      95,
      "Which attribute is used in LinearLayout to specify the direction of arrangement?",
      [
        "android:gravity",
        "android:layout_gravity",
        "android:orientation",
        "android:alignment",
      ],
      1,
    ),
    createQuestion(
      96,
      "Which file format is commonly used to define layouts in Android applications?",
      ["JSON", "XML", "HTML", "YAML"],
      1,
    ),
    createQuestion(
      97,
      "Which layout allows positioning UI elements relative to other elements?",
      ["LinearLayout", "FrameLayout", "RelativeLayout", "GridLayout"],
      1,
    ),
    createQuestion(
      98,
      "Which Android layout allows elements to be aligned relative to the parent container?",
      ["RelativeLayout", "TableLayout", "FrameLayout", "LinearLayout"],
      1,
    ),
    createQuestion(
      99,
      "Which layout is commonly used as a container for a single view or for overlapping views?",
      ["FrameLayout", "TableLayout", "LinearLayout", "ConstraintLayout"],
      1,
    ),
    createQuestion(
      100,
      "Which layout attribute determines the background color of a view?",
      [
        "android:color",
        "android:textColor",
        "android:background",
        "android:style",
      ],
      1,
    ),
    createQuestion(
      101,
      "Which layout organizes its child views into rows and columns?",
      ["FrameLayout", "LinearLayout", "TableLayout", "RelativeLayout"],
      1,
    ),
    createQuestion(
      102,
      "Which attribute defines the unique identifier for a view in a layout?",
      ["android:name", "android:key", "android:value", "android:id"],
      1,
    ),
    createQuestion(
      103,
      "Which element is typically used inside TableLayout to define a row?",
      ["TableCell", "TableRow", "RowLayout", "GridRow"],
      1,
    ),
    createQuestion(
      104,
      "Which layout is best suited for stacking views on top of each other?",
      ["LinearLayout", "FrameLayout", "TableLayout", "RelativeLayout"],
      1,
    ),
    createQuestion(
      105,
      "Which layout provides the most flexible way to position views using constraints?",
      ["LinearLayout", "ConstraintLayout", "FrameLayout", "TableLayout"],
      1,
    ),
    createQuestion(
      106,
      "What does the value wrap_content mean for layout width or height?",
      [
        "The view fills the entire screen",
        "The view size depends on its content",
        "The view is invisible",
        "The view overlaps other views",
      ],
      1,
    ),
    createQuestion(
      107,
      "Which Android layout can overlap its child views?",
      ["LinearLayout", "TableLayout", "FrameLayout", "GridLayout"],
      1,
    ),
    createQuestion(
      108,
      "Which attribute is used to make a view occupy all available space in its parent layout?",
      ["wrap_content", "fill_parent", "match_parent", "layout_center"],
      1,
    ),
    createQuestion(
      109,
      "Which layout attribute controls how a view is positioned within its parent layout?",
      [
        "android:layout_width",
        "android:layout_height",
        "android:layout_gravity",
        "android:text",
      ],
      1,
    ),
    createQuestion(
      110,
      "Which layout is recommended by Google for building complex and responsive UI designs?",
      ["LinearLayout", "FrameLayout", "ConstraintLayout", "TableLayout"],
      1,
    ),
    createQuestion(
      111,
      "Which attribute is commonly used to specify spacing between views in a layout?",
      [
        "android:padding",
        "android:textColor",
        "android:background",
        "android:id",
      ],
      0,
    ),
    createQuestion(
      112,
      "Which Android layout allows views to be arranged in a grid-like structure?",
      ["GridLayout", "FrameLayout", "LinearLayout", "RelativeLayout"],
      0,
    ),
    createQuestion(
      113,
      "What is the purpose of the Android ViewModel component?",
      [
        "To manage the UI components directly",
        "To store & manage UI-related data in a lifecycle-conscious way",
        "To handle database operations",
        "To manage network requests",
      ],
      1,
    ),
    createQuestion(
      114,
      "What does the 'WorkManager' in Android handle?",
      [
        "Managing UI updates in the background",
        "Scheduling background tasks that need to run even if the app is closed or the device is restarted",
        "Handling user input",
        "Managing database transactions",
      ],
      1,
    ),
    createQuestion(
      115,
      "What is the cat in Logcat?",
      ["Concatenate", "Content", "Communicate", "Category"],
      1,
    ),
    createQuestion(
      116,
      "What supports Android for running various instances efficiently?",
      ["JVM", "DVM", "Compiler", "Emulator"],
      1,
    ),
    createQuestion(
      117,
      "How do lifecycle-aware components help with managing resources in Android?",
      [
        "They perform background operations",
        "They manage memory by binding views automatically",
        "They save UI state across activity transitions",
        "They prevent memory leaks by observing lifecycle states",
      ],
      1,
    ),
    createQuestion(
      118,
      "Nine-patch image tool purpose in Android is ______ ?",
      [
        "Image Extension Tool",
        "Change Bitmap Images into Nine Sections",
        "Image Conversion Tool",
        "All Above",
      ],
      1,
    ),
    createQuestion(
      119,
      "Under which of the following Android is licensed?",
      ["OSS", "Sourceforge", "Apache/MIT", "None of the above"],
      1,
    ),
    createQuestion(
      120,
      "APK stands for -",
      [
        "Android Phone Kit",
        "Android Page Kit",
        "Android Package Kit",
        "None of the above",
      ],
      1,
    ),
    createQuestion(
      121,
      "Which of the following converts Java byte code into Dalvik byte code?",
      [
        "Dalvik converter",
        "Dex compiler",
        "Mobile interpretive compiler (MIC)",
        "None of the above",
      ],
      0,
    ),
    createQuestion(
      122,
      "How can we stop the services in android?",
      [
        "By using the stopSelf() and stopService() method",
        "By using the finish() method",
        "By using system.exit() method",
        "None of the above",
      ],
      0,
    ),
    createQuestion(
      123,
      "How can we kill an activity in android?",
      [
        "Using finish() method",
        "Using finishActivity(int requestCode)",
        "Both (a) and (b)",
        "Neither (a) nor (b)",
      ],
      0,
    ),
    createQuestion(
      124,
      "ADB stands for -",
      [
        "Android debug bridge",
        "Android delete bridge",
        "Android destroy bridge",
        "None of the above",
      ],
      0,
    ),
    createQuestion(
      125,
      "On which of the following, developers can test the application, while developing the android applications?",
      [
        "Third-party emulators",
        "Emulator included in Android SDK",
        "Physical android phone",
        "All the above",
      ],
      1,
    ),
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
    button.setAttribute(
      "aria-current",
      index === currentQuizIndex ? "page" : "false",
    );
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
  isSubmitted = false;
  resultPanel.classList.remove("show");
  closeResultModal();
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
      radio.disabled = isSubmitted;

      const optionText = document.createElement("span");
      optionText.className = "option-text";
      optionText.innerText = `${answerLabels[optionIndex]}. ${option.text}`;

      label.append(radio, optionText);
      label.addEventListener("click", () =>
        selectAnswer(question.id, optionIndex),
      );
      options.appendChild(label);
    });

    const feedback = document.createElement("div");
    feedback.className = "question-feedback";

    card.append(options, feedback);
    questionList.appendChild(card);
  });

  refreshSelections();
  if (isSubmitted) {
    showGrading();
  }
}

function selectAnswer(questionId, optionIndex) {
  if (isSubmitted) {
    return;
  }

  answers.set(questionId, optionIndex);
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
      optionEl.classList.toggle("locked", isSubmitted);
      optionEl.classList.remove("correct", "incorrect");
      optionEl.querySelector("input").checked = checked;
      optionEl.querySelector("input").disabled = isSubmitted;
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
    const card = questionList.querySelector(
      `[data-question-id="${question.id}"]`,
    );
    const selected = answers.get(question.id);
    const correctIndex = question.options.findIndex((option) => option.correct);
    const feedback = card.querySelector(".question-feedback");

    card.querySelectorAll(".option").forEach((optionEl) => {
      const optionIndex = Number(optionEl.dataset.optionIndex);
      optionEl.classList.toggle("correct", optionIndex === correctIndex);
      optionEl.classList.toggle(
        "incorrect",
        selected !== undefined &&
          optionIndex === selected &&
          optionIndex !== correctIndex,
      );
    });

    feedback.classList.add("show");
    if (selected === undefined) {
      feedback.classList.add("unanswered");
      feedback.innerText = `Chưa chọn đáp án. Đáp án đúng: ${answerLabels[correctIndex]}. ${question.options[correctIndex].text}`;
    } else if (selected === correctIndex) {
      feedback.classList.add("correct");
      feedback.innerText = "Đúng.";
    } else {
      feedback.classList.add("incorrect");
      feedback.innerText = `Sai. Đáp án đúng: ${answerLabels[correctIndex]}. ${question.options[correctIndex].text}`;
    }
  });
}

function openResultModal(score) {
  modalQuizName.innerText = quizSets[currentQuizIndex].title;
  modalScore.innerText = `${score.correct}/${score.total} câu đúng`;
  modalNote.innerText = `Bạn đã làm ${score.answered}/${score.total} câu trong đề này.`;
  resultModal.classList.add("show");
  modalOkBtn.focus();
}

function closeResultModal() {
  resultModal.classList.remove("show");
}

function gradeQuiz() {
  const score = calculateScore();
  isSubmitted = true;
  updateSummary(score);
  refreshSelections();
  showGrading();

  resultTitle.innerText = `Kết quả: ${score.correct}/${score.total} câu đúng (${score.percent}%)`;
  resultText.innerText = `Bạn đã làm ${score.answered}/${score.total} câu. Các câu chưa làm được tính là sai.`;
  resultPanel.classList.add("show");
  openResultModal(score);
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function shuffleQuestions() {
  isSubmitted = false;
  resultPanel.classList.remove("show");
  closeResultModal();
  displayedQuestions = [...displayedQuestions]
    .map((question) => ({ question, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ question }) => question);

  renderQuestions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetQuiz() {
  answers = new Map();
  isSubmitted = false;
  resultPanel.classList.remove("show");
  closeResultModal();
  updateSummary();
  renderQuestions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

shuffleBtn.addEventListener("click", shuffleQuestions);
gradeBtn.addEventListener("click", gradeQuiz);
resetBtn.addEventListener("click", resetQuiz);
bottomGradeBtn.addEventListener("click", gradeQuiz);
modalCloseBtn.addEventListener("click", closeResultModal);
modalOkBtn.addEventListener("click", closeResultModal);
resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) {
    closeResultModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && resultModal.classList.contains("show")) {
    closeResultModal();
  }
});

renderQuizNav();
renderQuestions();
updateSummary();

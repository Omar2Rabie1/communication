const questions = [
  {
    question: "Which OOP principle primarily focuses on hiding internal implementation details while exposing only necessary functionality?",
    options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    answer: 3 // index (0-based) => d. Abstraction
  },
  {
    question: "According to the Single Responsibility Principle (SRP), a class should:",
    options: [
      "Handle all responsibilities for its module",
      "Have one reason to change",
      "Have exactly one public method",
      "Only depend on abstract classes"
    ],
    answer: 1
  },
  {
    question: "Which scenario most clearly violates the Liskov Substitution Principle (LSP)?",
    options: [
      "A subclass overrides a method to improve performance while maintaining the same contract",
      "A subclass adds a new helper method",
      "A Square subclass of Rectangle that breaks width/height assignment behavior",
      "A subclass implements an additional interface"
    ],
    answer: 2
  },
  {
    question: "The Open/Closed Principle (OCP) is best demonstrated by:",
    options: [
      "Editing existing code whenever new features are needed",
      "Adding new classes that implement existing interfaces instead of modifying existing code",
      "Using a single class for all behaviors to avoid duplication",
      "Declaring all methods as final to prevent changes"
    ],
    answer: 1
  },
  {
    question: "Which OOP feature allows different objects to be treated uniformly through a common interface?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    answer: 1
  },
  {
    question: "The Interface Segregation Principle (ISP) suggests that:",
    options: [
      "Clients should not be forced to depend on methods they do not use",
      "Interfaces should always be implemented by exactly one class",
      "One large interface is better than many small ones",
      "All interfaces must have default implementations"
    ],
    answer: 0
  },
  {
    question: "The Dependency Inversion Principle (DIP) encourages:",
    options: [
      "Using only concrete classes for better performance",
      "Avoiding all external dependencies",
      "Depending on abstractions and injecting implementations at runtime",
      "High-level modules depending directly on low-level modules"
    ],
    answer: 2
  },
  {
    question: "The primary purpose of the Singleton pattern is to:",
    options: [
      "Create families of related objects",
      "Allow an object to change its behavior based on internal state",
      "Separate object construction from its representation",
      "Ensure a class has only one instance and provide global access to it"
    ],
    answer: 3
  },
  {
    question: "What is the primary difference between eager and lazy initialization in the Singleton pattern?",
    options: [
      "Eager initialization requires synchronized methods, while lazy initialization does not",
      "Eager initialization is always thread-safe, while lazy initialization is never thread-safe",
      "Lazy initialization uses more memory than eager initialization",
      "Eager initialization creates the instance when the class is first loaded, while lazy initialization creates the instance only when first requested"
    ],
    answer: 3
  },
  {
    question: "Which statement best describes the trade-offs between lazy and eager singleton initialization?",
    options: [
      "Eager initialization always performs better than lazy initialization in all scenarios",
      "Eager initialization guarantees thread safety but may waste resources if the instance is never used",
      "Lazy initialization saves resources if unused but requires careful consideration of thread safety in multithreaded environments",
      "Both A and B are correct"
    ],
    answer: 2
  },
  { question: "Inheritance allows one class to acquire properties and behaviors from another class.", options: ["True", "False"], answer: 0 },
  { question: "The Singleton pattern is designed to create multiple distinct instances of a class.", options: ["True", "False"], answer: 1 },
  { question: "The Interface Segregation Principle advocates for creating large, comprehensive interfaces that serve many different clients.", options: ["True", "False"], answer: 1 },
  { question: "Abstraction in OOP focuses on essential characteristics while hiding irrelevant implementation details.", options: ["True", "False"], answer: 0 },
  { question: "The Open/Closed Principle suggests that you should modify existing classes whenever new requirements emerge.", options: ["True", "False"], answer: 1 },
  { question: "Polymorphism enables a single interface to represent different underlying data types or classes.", options: ["True", "False"], answer: 0 },
  { question: "The Dependency Inversion Principle states that high-level modules should depend on abstractions rather than concrete implementations.", options: ["True", "False"], answer: 0 },
  { question: "A key characteristic of Singleton pattern implementation is typically a private constructor.", options: ["True", "False"], answer: 0 },
  { question: "The Singleton Method pattern creates families of related objects, while the Abstract Factory pattern creates individual objects.", options: ["True", "False"], answer: 1 },
  { question: "Favoring composition over inheritance generally leads to more flexible and less tightly coupled designs.", options: ["True", "False"], answer: 0 },
  {
    question: "What will be the output of the following code?\n\nclass Animal { public String sound() { return \"Some sound\"; } }\nclass Dog extends Animal { @Override public String sound() { return \"Bark\"; } }\nclass Cat extends Animal { @Override public String sound() { return \"Meow\"; } }\npublic class Main { public static void main(String[] args) { Animal[] animals = {new Dog(), new Cat(), new Animal()}; for (Animal animal : animals) { System.out.println(animal.sound()); } } }",
    options: [
      "Bark \\n Some sound \\n Meow",
      "Meow \\n Bark \\n Some sound",
      "Some sound \\n Some sound \\n Some sound",
      "Bark \\n Meow \\n Some sound"
    ],
    answer: 3
  },
  {
    question: "Which of the following classes violates the Single Responsibility Principle?\n\nclass Order {\n  public void calculateTotalPrice() { /*...*/ }\n  public void saveToDatabase() { /*...*/ }\n  public void sendOrderConfirmation() { /*...*/ }\n}",
    options: [
      "All methods should be in separate classes",
      "The calculateTotalPrice method should be moved to another class.",
      "The saveToDatabase and sendOrderConfirmation methods should be moved to separate classes.",
      "The class is correctly designed according to SRP."
    ],
    answer: 2
  },
  {
    question: "What will be the output of the following code?\n\nclass Parent { public void show() { System.out.println(\"Parent show\"); } }\nclass Child extends Parent { public void show() { System.out.println(\"Child show\"); } }\npublic class Main { public static void main(String[] args) { Parent p = new Child(); p.show(); } }",
    options: ["RunTime Error", "Child show", "Compilation Error", "Parent show"],
    answer: 1
  },
  {
    question: "Which of the following options correctly follows the Interface Segregation Principle?\n\ninterface Printer {\n  void printDocument();\n  void scanDocument();\n  void faxDocument();\n}",
    options: [
      "The Printer interface should be split into smaller interfaces",
      "The Printer interface should be an abstract class.",
      "SimplePrinter should only implement the methods it needs",
      "This code is already following ISP"
    ],
    answer: 0
  },
  {
    question: "Which of the following code snippets best demonstrates encapsulation?",
    options: [
      "public class Account { protected double balance; public void setBalance(double balance) { this.balance = balance; } }",
      "public class Account { public double balance; }",
      "public class Account { double balance; public Account(double balance) { this.balance = balance; } }",
      "public class Account { private double balance; public double getBalance() { return balance; } public void deposit(double amount) { if (amount > 0) { balance += amount; } } public void withdraw(double amount) { if (amount > 0 && amount <= balance) { balance -= amount; } } }"
    ],
    answer: 3
  },
  { question: "What is the relationship between a class and an object?", options: ["A class is an instance of an object", "Objects create classes at runtime", "Classes and objects are the same thing", "An object is an instance of a class"], answer: 3 },
  { question: "In OOP, what does polymorphism mean?", options: ["A class can inherit from multiple parent classes", "A method can be defined multiple times with different parameters", "A class can have multiple constructors", "A superclass reference variable can reference objects of a subclass"], answer: 3 },
  { question: "Which SOLID principle states that a class should have only one reason to change?", options: ["Open-Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Single Responsibility Principle"], answer: 3 },
  { question: "What does the Open-Closed Principle advocate?", options: ["Software entities should be open for modification but closed for extension", "Software entities should be open for extension but closed for modification", "Software entities should be open for both extension and modification", "Software entities should be closed for both extension and modification"], answer: 1 },
  { question: "What is the Liskov Substitution Principle about?", options: ["It requires that subclasses should be substitutable for their base classes", "It mandates that high-level modules should not depend on low-level modules", "It specifies that classes should have only one responsibility", "It states that interfaces should be split into smaller ones"], answer: 0 },
  { question: "Which SOLID principle is violated when a class is forced to implement methods it doesn't use?", options: ["Interface Segregation Principle", "Open-Closed Principle", "Single Responsibility Principle", "Liskov Substitution Principle"], answer: 0 },
  { question: "What is the primary purpose of the Singleton design pattern?", options: ["To allow multiple instances of a class", "To separate object construction from its representation", "To create objects without exposing the creation logic", "To restrict a class to have only one instance and provide global access to it"], answer: 3 },
  { question: "What is the main difference between Eager and Lazy Singleton implementations?", options: ["Lazy Singleton creates an instance only when needed, while Eager Singleton creates it at class loading time", "Eager Singleton is thread-safe while Lazy Singleton cannot be thread-safe", "Lazy Singleton can have multiple instances while Eager Singleton has only one", "Eager Singleton uses a public constructor while Lazy Singleton uses a private constructor"], answer: 0 },
  { question: "What is the primary advantage of the Factory design pattern?", options: ["It allows for objects to be created in a thread-safe manner", "It creates objects without exposing the creation logic to the client", "It ensures only one instance of a class exists", "It reduces memory usage in the application"], answer: 1 },
  { question: "Which access modifier should be used for the constructor in a Singleton pattern?", options: ["Private", "Protected", "Public", "Default (no modifier)"], answer: 0 },
  { question: "In OOP, method overloading occurs when two or more methods in a class have the same name but different parameter lists.", options: ["True", "False"], answer: 0 },
  { question: "The ToString() method can be used without overriding it in a custom class.", options: ["True", "False"], answer: 0 },
  { question: "The Single Responsibility Principle allows a class to have multiple responsibilities as long as they are related.", options: ["True", "False"], answer: 1 },
  { question: "In the Open-Closed Principle, \"closed for modification\" means that existing code should never be changed.", options: ["True", "False"], answer: 0 },
  { question: "The Interface Segregation Principle suggests creating large, comprehensive interfaces that classes can implement partially.", options: ["True", "False"], answer: 1 },
  { question: "The Liskov Substitution Principle is violated when a subclass cannot perform the same actions as its superclass.", options: ["True", "False"], answer: 0 },
  { question: "In the Dependency Inversion Principle, high-level modules should depend on low-level modules.", options: ["True", "False"], answer: 1 },
  { question: "A Lazy Singleton implementation is always thread-safe without additional synchronization.", options: ["True", "False"], answer: 1 },
  { question: "The main disadvantage of Eager Singleton is that it can be resource-intensive if the singleton is never used.", options: ["True", "False"], answer: 0 },
  { question: "The Factory design pattern helps encapsulate the object creation process from the client.", options: ["True", "False"], answer: 0 },
  { question: "In OOP, which concept is demonstrated when a subclass provides a specific implementation of a method already defined in its superclass?", options: ["Abstraction", "Inheritance", "Polymorphism", "Method Overriding"], answer: 3 },
  { question: "Which of the following is an example of violating the Liskov Substitution Principle?", options: ["Using inheritance to extend a class.", "Creating an abstract class that is not implemented by any subclass.", "Subclass modifying the behavior of a method such that it cannot be used in place of its parent class.", "Implementing an interface with an abstract class."], answer: 2 },
  { question: "Which of the following best describes the Dependency Inversion Principle?", options: ["High-level modules should not depend on low-level modules. Both should depend on abstractions.", "Classes should be designed to be open for extension but closed for modification.", "Subtypes must be substitutable for their base types.", "One class should have only one reason to change."], answer: 0 },
  { question: "Which SOLID principle is primarily aimed at reducing the size of large interfaces?", options: ["Single Responsibility Principle", "Interface Segregation Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"], answer: 1 },
  { question: "Which of the following is an example of violating the Open/Closed Principle?", options: ["Using inheritance to extend a class's functionality.", "Modifying existing classes to add new features.", "Implementing an interface to add new behaviors.", "Using abstract classes for common functionality."], answer: 1 },
  { question: "Which of the following statements about the Singleton pattern is true?", options: ["A Singleton class can have multiple instances if required.", "A Singleton class uses a private constructor to restrict instantiation.", "Singleton is used for creating multiple instances of a class.", "The Singleton pattern cannot be used in multi-threaded applications."], answer: 1 },
  { question: "What is the primary difference between an eager Singleton and a lazy Singleton?", options: ["Eager Singleton is initialized when required, while Lazy Singleton is created at startup.", "Lazy Singleton consumes more memory than Eager Singleton.", "Lazy Singleton is instantiated when the class is loaded, while Eager Singleton is instantiated upon the first request.", "Eager Singleton is created at startup, while Lazy Singleton is created upon the first request."], answer: 3 },
  { question: "Which method is commonly used in the Singleton pattern to provide the instance of the class?", options: ["getObject()", "newInstance()", "getInstance()", "createObject()"], answer: 2 },
  { question: "Which of the following scenarios is best suited for the Factory pattern?", options: ["When a class needs to ensure a single instance.", "When a class needs to be extended.", "When you have a superclass with multiple subclasses, and you need to return an object based on input.", "When you want to copy objects."], answer: 2 },
  { question: "What does the Factory pattern provide over directly instantiating objects using the new keyword?", options: ["Reduces the number of classes.", "Improves code readability.", "Encapsulates object creation and increases flexibility.", "Reduces memory usage."], answer: 2 },
  { question: "Lazy initialization in Singleton is more memory efficient but may cause delays during object creation.", options: ["True", "False"], answer: 0 },
  { question: "Factory patterns eliminate the need to use inheritance between classes.", options: ["True", "False"], answer: 1 },
  { question: "A Singleton class must have a static method that returns the single instance of the class.", options: ["True", "False"], answer: 0 },
  { question: "Factory patterns help to reduce coupling between the client and the concrete classes.", options: ["True", "False"], answer: 0 },
  { question: "The Singleton pattern is suitable for scenarios where global access to an instance is required.", options: ["True", "False"], answer: 0 },
  { question: "An abstract class can implement multiple interfaces in Java.", options: ["True", "False"], answer: 0 },
  { question: "The Interface Segregation Principle aims to combine several interfaces into one larger interface.", options: ["True", "False"], answer: 1 },
  { question: "The Single Responsibility Principle means a class should have more than one reason to change.", options: ["True", "False"], answer: 1 },
  { question: "Polymorphism allows the same method to behave differently based on the object it is acting upon.", options: ["True", "False"], answer: 0 },
  { question: "Liskov Substitution Principle allows using child classes interchangeably with parent classes without altering expected behavior.", options: ["True", "False"], answer: 0 }
];

// DOM elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress-bar::after');
const progressText = document.getElementById('progressText');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const scoreDisplay = document.getElementById('score');
const feedbackDisplay = document.getElementById('feedback');
const restartBtn = document.getElementById('restartBtn');

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// Start the quiz
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Display current question
function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsContainer.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = String.fromCharCode(97 + index) + '. ' + option;
    button.onclick = () => selectOption(button, index);
    optionsContainer.appendChild(button);
  });

  nextBtn.disabled = true;
  updateProgress();
}

// Handle option selection
function selectOption(button, index) {
  // Remove previous selections
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  button.classList.add('selected');
  selectedOption = index;
  nextBtn.disabled = false;
}

// Move to next question or submit
function nextQuestion() {
  if (selectedOption === null) return;

  const correct = selectedOption === questions[currentQuestion].answer;
  if (correct) score++;

  // Visual feedback
  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    if (i === questions[currentQuestion].answer) {
      opt.classList.add('correct');
    } else if (i === selectedOption && !correct) {
      opt.classList.add('incorrect');
    }
  });

  // Disable further interaction
  options.forEach(opt => opt.disabled = true);
  nextBtn.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question';
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  };
}

// Update progress bar & text
function updateProgress() {
  const percent = ((currentQuestion) / questions.length) * 100;
  document.querySelector('.progress-bar').style.width = `${percent}%`;
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Show final results
function showResults() {
  quizSection.classList.add('hidden');
  resultsSection.classList.remove('hidden');

  const percentage = Math.round((score / questions.length) * 100);
  scoreDisplay.textContent = `You scored ${score} out of ${questions.length} (${percentage}%)`;

  let feedback = "";
  if (percentage >= 90) feedback = "🏆 Excellent! You're a SOLID OOP master!";
  else if (percentage >= 75) feedback = "🎉 Great job! Solid understanding of OOP principles.";
  else if (percentage >= 60) feedback = "👍 Good effort! Review a few concepts to level up.";
  else feedback = "📚 Keep learning — OOP fundamentals take practice!";

  feedbackDisplay.textContent = feedback;
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', () => {
  resultsSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
  initQuiz();
});

// Start quiz on load
window.addEventListener('DOMContentLoaded', initQuiz);
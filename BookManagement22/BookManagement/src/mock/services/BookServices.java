package mock.services;

import java.util.*;

import mock.models.Book;
import mock.models.BookCase;
import mock.models.User;

public class BookServices {
	private static BookServices instance;
	private Set<Book> books;

	public BookServices() {
		books = new HashSet<>();
		String sql = "SELECT * FROM [Book]";
		books=DataProvider.getInstance().getListBook(sql);
		
	}

	public static BookServices getInstance() {
		if (instance == null) {
			instance = new BookServices();
		}
		return instance;
	}

	public Set<Book> getThisSet() {
		return this.books;
	}

	public void createBook(Scanner sc) {
		Book book = new Book();
		System.out.print("Enter the name");
		book.setBook_title(sc.next());
		System.out.print("Enter author :");
		book.setAuthor(sc.next());
		System.out.print("Enter the brief :");
		book.setBrief(sc.next());
		System.out.print("Enter the title");
		book.setCategory(sc.next());
		System.out.print("Enter the publisher : ");
		book.setPublisher(sc.next());
		System.out.print("Enter the content : ");
		book.setContent(sc.next());
		if (books.add(book)) {
			DataProvider.getInstance().addBook(book);
		}
	}

	public void showListBook() {
		String sql = "SELECT * FROM [Book]";
		Set<Book> listBook = DataProvider.getInstance().getListBook(sql);
		if (listBook.isEmpty()) {
			System.out.println("There is not any book in application");
			return;
		}
		for (Book book : listBook) {
			System.out.println(book);
		}
	}

	public void readBookById(int ID) {
		String sql = "SELECT * FROM [Book] Where [Book].book_id = " + ID;
		Set<Book> listBook = DataProvider.getInstance().getListBook(sql);
		if (listBook.isEmpty()) {
			System.out.println("NOT EXISTS");
		}
		for (Book book : listBook) {
			System.out.println(book);
		}

	}

	public void searchBookByName(String name) {
		String sql = "SELECT * FROM [Book] where [Book].book_title= '" + name + "'";
		Set<Book> listBook = DataProvider.getInstance().getListBook(sql);
		if (listBook.isEmpty()) {
			System.out.println("NOT EXISTS");
		}
		for (Book book : listBook) {
			System.out.println(book);
		}
	}

	public void searchBookByAuthor(String author) {
		String sql = "SELECT * FROM [Book] where [Book].author= '" + author + "'";
		Set<Book> listBook = DataProvider.getInstance().getListBook(sql);
		if (listBook.isEmpty()) {
			System.out.println("NOT EXISTS");
		}
		for (Book book : listBook) {
			System.out.println(book);
		}
	}
	public void updateBook(Scanner sc) {
		Book book = new Book();
		System.out.print("Enter ID :");
		book.setBookId(sc.nextInt());
		System.out.print("Enter the name");
		book.setBook_title(sc.next());
		System.out.print("Enter author :");
		book.setAuthor(sc.next());
		System.out.print("Enter the brief :");
		book.setBrief(sc.next());
		System.out.print("Enter the title");
		book.setCategory(sc.next());
		System.out.print("Enter the publisher : ");
		book.setPublisher(sc.next());
		System.out.print("Enter the content : ");
		book.setContent(sc.next());
		DataProvider.getInstance().update(book);
		
	}
	public void deteteBookByID(int ID) {
		if(DataProvider.getInstance().deleteBook(ID)) {
			System.out.println("Success!");
		}else{
			System.out.println("!!!");
		};
	}
	
	public void searchBookByCategory(String category) {
		String sql = "SELECT * FROM [Book] Where [Book].category = '" + category + "'";
		Set<Book> listBook = DataProvider.getInstance().getListBook(sql);
		if (listBook.isEmpty()) {
			System.out.println("NOT EXISTS");
		}
		for (Book book : listBook) {
			System.out.println(book);
		}
	}
	public void addBookIntoBookCase(Scanner sc,int ID) {
		System.out.println("nhap ID sach ban muon them vao");
		int ID_BOOK = sc.nextInt();
		DataProvider.getInstance().addBookIntoBookCase(ID, ID_BOOK);
	}
	public void deleteBookFromBookCase(Scanner sc, int ID) {
		System.out.println("nhap ID sach ban muon xoa tu bookcase cua ban");
		int ID_BOOK = sc.nextInt();
		DataProvider.getInstance().deleteBookInBookCase(ID, ID_BOOK);
	}
	public void showYourBookCase(int ID_User) {
		String sql = "select * from Book \r\n" + 
				"inner join Bookcase\r\n" + 
				"on Book.book_id=Bookcase.id_book and Bookcase.id_User= " + ID_User;
		for(Book book :DataProvider.getInstance().getListBook(sql)) {
			System.out.println(book);
		}
		
	}
	public BookCase getBookCase(int ID) {
		String sql = "";
		
		Set<Book> listBook = DataProvider.getInstance().getListBook(sql);
		BookCase bookCase = new BookCase(ID,listBook);
		
		return bookCase;
		
	}
	

}

package mock.services;

import java.sql.*;
import java.util.*;

import mock.models.Book;
import mock.models.User;

public class DataProvider {
	private static DataProvider instance;
	private static String DB_URL = "jdbc:sqlserver://localhost:1433;" + "databaseName=BookManagement;"
			+ "integratedSecurity=true";
	private static String USER_NAME = "sa";
	private static String PASSWORD = "123456";

	private Connection conn;

	private DataProvider() {
		conn = null;
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			conn = DriverManager.getConnection(DB_URL, USER_NAME, PASSWORD);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static DataProvider getInstance() {
		if (instance == null) {
			instance = new DataProvider();
		}
		return instance;
	}

	public boolean addUser(User user) {
		String sql = "INSERT INTO [User]" + "VALUES(?,?,?)";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, user.getUsername());
			ps.setString(2, user.getPassword());
			ps.setInt(3, user.getRole());

			return ps.executeUpdate() >1;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return false;
	}
	public boolean deleteBook(int ID) {
		String sql = "delete Book where Book.book_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, String.valueOf(ID));
			return ps.executeUpdate()==1;
		}catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	public boolean update(Book book) {
		String sql = "update Book\r\n" + 
				"set Book.book_title = ? , Book.author = ?,Book.brief=? ,book.publisher=?,Book.content=?,Book.category=?\r\n" + 
				"where book_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, book.getBook_title());
			ps.setString(2, book.getAuthor());
			ps.setString(3, book.getBrief());
			ps.setString(4, book.getPublisher());
			ps.setString(5, book.getContent());
			ps.setString(6, book.getCategory());
			ps.setString(7, String.valueOf(book.getBookId()));
			return ps.executeUpdate() >1;
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return false;
	}
	
	public boolean addBookIntoBookCase(int ID_User, int ID_BOOK) {
		String sql = "insert into Bookcase values (?,?)";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, ID_BOOK);
			ps.setInt(2, ID_User);
			return ps.executeLargeUpdate()>1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return false;
	}
	
	public boolean deleteBookInBookCase(int ID_User, int ID_BOOK) {
		String sql = "delete Bookcase where Bookcase.id_book= "+ ID_BOOK +"and Bookcase.id_User=" + ID_User;
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			return ps.executeLargeUpdate()>1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return false;
	}
	
	public boolean addBook(Book book) {
		String sql = "INSERT INTO [Book]" + "VALUES(?,?,?,?,?,?)";

		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, book.getBook_title());
			ps.setString(2, book.getAuthor());
			ps.setString(3, book.getBrief());
			ps.setString(4, book.getPublisher());
			ps.setString(5, book.getContent());
			ps.setString(6, book.getCategory());
			return ps.executeUpdate() > 1;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public Set<Book> getListBook(String sql) {
		Set<Book> listBook = new HashSet<>();
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Book book = new Book();
				book.setBookId(rs.getInt(1));
				book.setBook_title(rs.getString(2));
				book.setAuthor(rs.getString(3));
				book.setBrief(rs.getString(4));
				book.setPublisher(rs.getString(5));
				book.setContent(rs.getString(6));
				book.setCategory(rs.getString(7));
				listBook.add(book);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listBook;

	}
	public void end() {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void main(String[] args) {
//		new BookServices();
//		BookServices.getInstance().deteteBookByID(1004);
//		new BookServices().getInstance().showListBook();
//		BookServices.getInstance().updateBook(new Scanner(System.in));
		
		new BookServices().getInstance().showYourBookCase(2003);
	}
}

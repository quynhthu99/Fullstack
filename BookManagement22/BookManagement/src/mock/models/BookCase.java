package mock.models;

import java.util.List;
import java.util.Set;

public class BookCase {
	private int bookCaseId;
	private Set<Book> listBook;

	public BookCase() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookCase(int bookCaseId, Set<Book> listBook) {
		super();
		this.bookCaseId = bookCaseId;
		this.listBook = listBook;
	}

	public int getBookCaseId() {
		return bookCaseId;
	}

	public void setBookCaseId(int bookCaseId) {
		this.bookCaseId = bookCaseId;
	}
	public Set<Book> getListBook() {
		return listBook;
	}

	public void setListBook(Set<Book> listBook) {
		this.listBook = listBook;
	}

	@Override
	public String toString() {
		return "BookCase [bookCaseId=" + bookCaseId + ", listBook=" + listBook + "]";
	}

}

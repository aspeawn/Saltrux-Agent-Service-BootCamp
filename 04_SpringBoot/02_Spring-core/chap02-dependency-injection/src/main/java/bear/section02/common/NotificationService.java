package bear.section02.common;

import org.springframework.context.ApplicationContext;

// Notification Client를 생성자 주입
public class NotificationService {
    NotificationClient notificationClient;

    public NotificationService(NotificationClient notificationClient) {
        this.notificationClient = notificationClient;
    }
}

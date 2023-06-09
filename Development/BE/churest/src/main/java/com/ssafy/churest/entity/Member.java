package com.ssafy.churest.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    @Column(length = 45)
    private String email;

    @Column(length = 6)
    private String nickname;

    private String token;

    private String fcmToken;

    @ColumnDefault("0")
    private int coin;

    private int avatarId;

    @UpdateTimestamp
    private LocalDateTime modifiedTime;

    private int grownTreeCount;

//    @OneToMany(mappedBy = "member")
//    private List<Board> boards = new ArrayList<>();
//
//    @OneToMany(mappedBy = "member")
//    private List<Notification> notifications = new ArrayList<>();
//
//    @OneToMany(mappedBy = "member")
//    private List<GuestBook> guestBooks = new ArrayList<>();
//
//    @OneToMany(mappedBy = "member")
//    private List<Tag> tags = new ArrayList<>();

    @Builder
    public Member(String email, String nickname, int coin, int avatarId){
        this.email = email;
        this.nickname = nickname;
        this.coin = coin;
        this.avatarId = avatarId;
    }

    public Member updateCoin(int coin){
        this.coin = coin;
        return this;
    }

    public Member rewardCoinAndTree(){
        this.coin += 20;
        this.grownTreeCount++;
        return this;
    }

    public Member updateEmail(String email) {
        this.email = email;
        return this;
    }

    public Member updateToken(String token) {
        this.token = token;
        return this;
    }

    public Member updateNickname(String nickname){
        this.nickname = nickname;
        return this;
    }

    public Member updateAvatar(int avatarId){
        this.avatarId = avatarId;
        return this;
    }

}

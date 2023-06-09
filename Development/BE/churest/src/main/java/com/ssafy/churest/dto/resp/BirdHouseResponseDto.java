package com.ssafy.churest.dto.resp;

import com.ssafy.churest.entity.BirdHouse;
import com.ssafy.churest.entity.House;
import lombok.Builder;
import lombok.Data;

public class BirdHouseResponseDto {
    @Data
    @Builder
    public static class Info{
        private int id;
        private String name;
        private String description;
        private int price;
        private Boolean isOwn;
        private Boolean isUsed;
        public static BirdHouseResponseDto.Info fromEntity(BirdHouse birdHouse){
            return Info.builder()
                    .id(birdHouse.getBirdHouseId())
                    .name(birdHouse.getName())
                    .description(birdHouse.getDescription())
                    .price(birdHouse.getPrice())
                    .build();
        }
    }
}

function BMI() {
    let chieucao = document.getElementById("chieucao").value;
    let cannang = document.getElementById("cannang").value;
    let bmi = (cannang / ((chieucao * chieucao) / 10000)).toFixed(2);

    if (bmi < 16) {
        document.getElementById("img-bmi").src = info.a1.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a1.danhgia;
        document.getElementById("tinhtrang").innerText = info.a1.tinhtrang;
        document.getElementById("nguyco").innerText = info.a1.nguyco;
        document.getElementById("goiy").innerText = info.a1.goiy;
    } else if (bmi < 16.99) {
        document.getElementById("img-bmi").src = info.a2.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a2.danhgia;
        document.getElementById("tinhtrang").innerText = info.a2.tinhtrang;
        document.getElementById("nguyco").innerText = info.a2.nguyco;
        document.getElementById("goiy").innerText = info.a2.goiy;
    } else if (bmi < 18.49) {
        document.getElementById("img-bmi").src = info.a3.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a3.danhgia;
        document.getElementById("tinhtrang").innerText = info.a3.tinhtrang;
        document.getElementById("nguyco").innerText = info.a3.nguyco;
        document.getElementById("goiy").innerText = info.a3.goiy;
    } else if (bmi < 22.99) {
        document.getElementById("img-bmi").src = info.a4.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a4.danhgia;
        document.getElementById("tinhtrang").innerText = info.a4.tinhtrang;
        document.getElementById("nguyco").innerText = info.a4.nguyco;
        document.getElementById("goiy").innerText = info.a4.goiy;
    } else if (bmi < 24.99) {
        document.getElementById("img-bmi").src = info.a5.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a5.danhgia;
        document.getElementById("tinhtrang").innerText = info.a5.tinhtrang;
        document.getElementById("nguyco").innerText = info.a5.nguyco;
        document.getElementById("goiy").innerText = info.a5.goiy;
    } else if (bmi < 29.99) {
        document.getElementById("img-bmi").src = info.a6.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a6.danhgia;
        document.getElementById("tinhtrang").innerText = info.a6.tinhtrang;
        document.getElementById("nguyco").innerText = info.a6.nguyco;
        document.getElementById("goiy").innerText = info.a6.goiy;
    } else if (bmi < 34.99) {
        document.getElementById("img-bmi").src = info.a7.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a7.danhgia;
        document.getElementById("tinhtrang").innerText = info.a7.tinhtrang;
        document.getElementById("nguyco").innerText = info.a7.nguyco;
        document.getElementById("goiy").innerText = info.a7.goiy;
    } else {
        document.getElementById("img-bmi").src = info.a8.img;
        document.getElementById("bmi").innerText = bmi;
        document.getElementById("danhgia").innerText = info.a8.danhgia;
        document.getElementById("tinhtrang").innerText = info.a8.tinhtrang;
        document.getElementById("nguyco").innerText = info.a8.nguyco;
        document.getElementById("goiy").innerText = info.a8.goiy;
    }
}

let info = {
    a1: {
        bmi: "Chỉ số BMI < 16",
        danhgia: "Bạn đang ở tình trạng gầy độ 3",
        tinhtrang: "Rất nguy hiểm",
        nguyco:
            "Nguyên nhân dẫn đến tình trạng chủ yếu do cơ thể kém hấp thu, ăn uống kém, mất cảm giác thèm ăn nên qua loa cho xong bữa, khẩu phần không cân đối, thực đơn thiếu đa dạng, … thời gian dài dẫn đến tình trạng cơ thể đang thiếu protein, chất béo, vitamin và khoáng chất. Đây là mức độ nghiêm trọng làm cho bạn dễ ốm, đối mặt với nhiều nguy cơ bệnh tật như loãng xương, thiếu máu, vô sinh, rụng tóc, suy nhược, giảm trí nhớ…",
        goiy: "Đối với tình trạng này Bạn cần đến cơ quan y tế khám đánh giá ngay hoặc Bạn có thể liên hệ tư vấn để Bác sĩ, chuyên gia dinh dưỡng của học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá tiến độ cải thiện hàng ngày Bạn nhé.",
        img: "./img/01.png"
    },
    a2: {
        bmi: "Chỉ số BMI 16 - 16,99",
        danhgia: "Bạn đang ở tình trạng gầy độ 2",
        tinhtrang: "Nguy hiểm",
        nguyco:
            "Nguyên nhân dẫn đến tình trạng chủ yếu do tình trạng kém hấp thu, ăn uống kém, mất cảm giác thèm ăn nên qua loa cho xong bữa, khẩu phần không cân đối, thực đơn thiếu đa dạng dẫn đến tình trạng cơ thể đang thiếu protein, chất béo, vitamin và khoáng chất dễ gây ra tình trạng suy giảm đề kháng làm cho Bạn dễ ốm, đối mặt với nhiều nguy cơ bệnh tật như loãng xương, thiếu máu, vô sinh, rụng tóc, suy nhược, giảm trí nhớ…",
        goiy: "Đối với tình trạng này Bạn cần chế độ dinh dưỡng cân đối đầy đủ 4 nhóm chất: đạm, đường, béo, vitamin và muối khoáng. Trong đó, chất đạm có vai trò rất quan trọng trong việc xây dựng nên các tế bào và mô; vitamin, muối khoáng, chất xơ giúp chuyển hóa tốt, kích thích hệ tiêu hóa… có thể dùng các loại sữa cao năng lượng > 1 kcal/ml để đảm bảo nhu cầu năng lượng. Hoặc Bạn có thể liên hệ tư vấn để Bác sĩ và chuyên gia dinh dưỡng của học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá theo tiến độ hàng ngày Bạn nhé.",
        img: "./img/02.png"
    },
    a3: {
        bmi: "Chỉ số BMI 17 - 18,49",
        danhgia: "Bạn  đang ở tình trạng gầy độ 1",
        tinhtrang: "Cảnh báo thiếu cân",
        nguyco: "Nguyên nhân dẫn đến tình trạng chủ yếu do kém hấp thu, hoặc Bạn đang bổ sung dinh dưỡng không cân đối, thực đơn thiếu đa dạng. Nếu tình trạng cân nặng sụt giảm Bạn có thể đối mặt với nguy cơ tình trạng cơ thể mệt mỏi, làm việc kém hiệu quả, mất ngủ, thiếu năng lượng, dẫn đến suy nhược cơ thể nên càng gầy hơn. Hoặc nặng hơn Bạn có thể gặp phải bệnh thường gặp như thiếu máu, sa dạ dày, sỏi mật, loãng xương, rụng tóc, vô sinh ở nữ giới…",
        goiy: "Đối với tình trạng này Bạn cần Chế độ dinh dưỡng cân đối đầy đủ 4 nhóm chất: đạm, đường, béo, vitamin và muối khoáng. Trong đó, chất đạm có vai trò rất quan trọng trong việc xây dựng nên các tế bào và mô; vitamin, muối khoáng, chất xơ giúp chuyển hóa tốt, kích thích hệ tiêu hóa…có thể dùng các loại sữa cao năng lượng > 1 kcal/ml để đảm bảo nhu cầu năng lượng. Nếu Bạn chưa có thực đơn phù hợp hãy liên hệ tư vấn để Bác sĩ và chuyên gia dinh dưỡng học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá theo tiến độ cải thiện hàng ngày Bạn nhé.",
        img: "./img/03.png"
    },
    a4: {
        bmi: "Chỉ số BMI  18,5 - 22,99",
        danhgia: "Bình thường",
        tinhtrang: "Chúc mừng bạn đang có một cơ thể ở mức độ Bình thường.",
        nguyco: "Ngay cả những người có chỉ số BMI khoẻ mạnh cũng có thể đứng trước nguy cơ mắc một số tình trạng sức khoẻ. Vì vậy, điều quan trọng là cần xây dựng một lối sống lành mạnh thông qua chế độ ăn uống thích hợp, vận động hợp lý và khám sức khoẻ định kỳ để duy trì sức khoẻ tốt nhất có thể.",
        goiy: "Đối với tình trạng này Bạn cần Chế độ dinh dưỡng cân đối đầy đủ 4 nhóm chất: đạm, đường, béo, vitamin và muối khoáng… nghỉ ngơi hợp lý để duy trì sức khỏe. Bạn có thể liên hệ với Bác sĩ và chuyên gia dinh dưỡng của học viện Nutri Academy khi quan tâm thêm việc bổ sung các chất như canxi, sắt, … sao cho phù hợp Bạn nhé.",
        img: "./img/04.png"
    },
    a5: {
        bmi: "Chỉ số BMI  23 - 24,99",
        danhgia: "Bạn đang ở tình trạng thừa cân",
        tinhtrang: "Đây là tình trạng phổ biến cân nặng cao hơn mức trung bình của một người bình thường.",
        nguyco: "Hiện tượng này là hậu quả của quá trình nạp vào nhiều calo hơn lượng tiêu thụ của cơ thể .Đây là tình trạng có thể điều chỉnh được dễ dàng với chế độ ăn và luyện tập hợp lý. Bạn cần thay đổi lối sống để tránh nguy cơ dẫn đến nguy béo phì sẽ dẫn đến cơ thể dễ mắc các bệnh mãn tính như tiểu đường, bệnh tim mạch, huyết áp cao, xương khớp, đột quỵ và ung thư….",
        goiy: "Ở thời điểm này, Bạn cần quan tâm nhiều hơn đến cân nặng và bắt đầu thay đổi chế độ sinh hoạt thường ngày. Thay đổi chế độ ăn: nên ăn nhiều rau xanh, hạn chế dùng dầu mỡ, sữa không đường, sữa đậu nành, các thực phẩm có calo thấp., uống đủ 2 lít nước mỗi ngày, ăn nhiều vào buổi sáng, hạn chế ăn vặt, không ăn đêm, ăn chậm nhai kỹ sẽ giúp Bạn no lâu hơn… Tỷ lệ mỡ trong cơ thể không hoàn toàn là con số phản ảnh được tình trạng sức khỏe của Bạn. Tuy nhiên ở một góc nhỏ chúng lại giúp Bạn tìm ra những vấn đề cơ thể đang gặp phải. Nếu Bạn đang quan tâm mà chưa có thực đơn phù hợp hãy liên hệ để Bác sĩ và chuyên gia dinh dưỡng học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá tiến độ cải thiện hàng ngày Bạn nhé.",
        img: "./img/05.png"
    },
    a6: {
        bmi: "Chỉ số BMI  25 - 29,99",
        danhgia: "Bạn đang ở tình trạng thừa cân 1",
        tinhtrang: "Đây là tình trạng phổ biến nhất và khởi đầu của béo phì",
        nguyco: "Nguyên nhân Béo phì là khi lượng mỡ tích tụ trong cơ thể nhiều hơn mức cho phép. Hiện tượng này là hậu quả của quá trình nạp vào nhiều calo hơn lượng tiêu thụ. Dễ dẫn đến nguy cơ cao mắc các bệnh mãn tính như tiểu đường, bệnh tim mạch, huyết áp cao, xương khớp, đột quỵ và ung thư…. Khi tình trạng béo phì vượt quá mức cho phép hoặc báo động nghiêm trọng cũng có thể làm tăng nguy cơ bị tử vong.",
        goiy: "Ở thời điểm này, Bạn cần quan tâm nhiều hơn đến cân nặng và bắt đầu thay đổi chế độ sinh hoạt thường ngày. Thay đổi chế độ ăn: nên ăn nhiều rau xanh, hạn chế dùng dầu mỡ, sữa không đường, sữa đậu nành, các thực phẩm có calo thấp, uống đủ 2 lít nước mỗi ngày, ăn nhiều vào buổi sáng, hạn chế ăn vặt, không ăn đêm, ăn chậm nhai kỹ sẽ giúp Bạn no lâu hơn,… Tỷ lệ mỡ trong cơ thể không hoàn toàn là con số phản ảnh được tình trạng sức khỏe của Bạn. Tuy nhiên, ở một góc nhỏ chúng lại giúp Bạn tìm ra những vấn đề cơ thể đang gặp phải. Nếu Bạn đang quan tâm mà chưa có thực đơn phù hợp hãy liên hệ để Bác sĩ và chuyên gia dinh dưỡng học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá tiến độ cải thiện hàng ngày Bạn nhé.",
        img: "./img/06.png"
    },
    a7: {
        bmi: "Chỉ số BMI 30 - 34,99",
        danhgia: "Bạn  đang ở tình trạng thừa cân mức độ 2",
        tinhtrang: "Cảnh báo nguy hiểm",
        nguyco: "Nguyên nhân béo phì là khi lượng mỡ tích tụ trong cơ thể nhiều hơn mức cho phép. Hiện tượng này là hậu quả của quá trình nạp vào nhiều calo hơn lượng tiêu thụ. Dẫn đến nguy cơ cao mắc các bệnh mãn tính như tiểu đường, bệnh tim mạch, huyết áp cao, xương khớp, đột quỵ và ung thư. Khi tình trạng béo phì vượt quá mức cho phép hoặc báo động nghiêm trọng cũng có thể làm tăng nguy cơ bị tử vong.",
        goiy: "Ở thời điểm này, Bạn cần phải quan tâm nhiều hơn đến cân nặng và lập tức thay đổi chế độ sinh hoạt thường ngày. Thay đổi chế độ ăn: nên ăn nhiều rau xanh, hạn chế dùng dầu mỡ, sữa không đường, sữa đậu nành, các thực phẩm có calo thấp.., uống đủ 2 lít nước mỗi ngày, ăn nhiều vào buổi sáng, hạn chế ăn vặt, không ăn đêm, ăn chậm nhai kỹ sẽ giúp Bạn no lâu hơn… Tuy kết quả tỷ lệ BMI không hoàn toàn là con số phản ảnh được tình trạng sức khỏe của Bạn toàn diện. Tuy nhiên, ở một góc nhỏ chúng lại giúp Bạn tìm ra những vấn đề cơ thể đang gặp phải. Nếu Bạn đang quan tâm mà vẫn chưa có thực đơn phù hợp hãy liên hệ Bác sĩ và chuyên gia dinh dưỡng học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá tiến độ cải thiện hàng ngày của Bạn nhé.",
        img: "./img/07.png"
    },
    a8: {
        bmi: "Chỉ số BMI 35 trở lên",
        danhgia: "Bạn đang ở tình trạng thừa cân mức độ 3",
        tinhtrang: "Cảnh báo rất nguy hiểm",
        nguyco: "Bạn đang đối mặt với các vấn đề sức khỏe có nguy cơ rất cao như các bệnh mãn tính như tiểu đường, bệnh tim mạch, huyết áp cao, xương khớp, đột quỵ và ung thư. Khi tình trạng béo phì vượt quá mức cho phép hoặc báo động nghiêm trọng cũng có thể làm tăng nguy cơ bị tử vong.",
        goiy: "Ở thời điểm này, Bạn cần đến khám tại các cơ quan y tế để nhận được chế độ dinh dưỡng và luyện tập phù hợp. Nếu chưa có điều kiện đến khám tại các cơ quan y tế Bạn cần lập tức hay đổi chế độ ăn: nên ăn nhiều rau xanh, hạn chế dùng dầu mỡ, sữa không đường, sữa đậu nành, các thực phẩm có calo thấp…, uống đủ 2 lít nước mỗi ngày, ăn nhiều vào buổi sáng, hạn chế ăn vặt, không ăn đêm, ăn chậm nhai kỹ sẽ giúp Bạn no lâu hơn… Tăng cường vận đông. Tuy kết quả tỷ lệ BMI không hoàn toàn là con số phản ảnh được tình trạng sức khỏe của Bạn toàn diện. Tuy nhiên, ở một góc nhỏ chúng lại giúp Bạn tìm ra những vấn đề cơ thể đang gặp phải. Nếu Bạn chưa có thực đơn phù hợp hãy liên hệ Bác sĩ và chuyên gia dinh dưỡng học viện Nutri Academy tư vấn và cho Bạn liệu trình cá nhân cụ thể, đồng thời theo dõi và đánh giá tiến độ cải thiện hàng ngày Bạn nhé.",
        img: "./img/08.png"
    },
};

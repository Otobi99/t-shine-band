import { useState } from "react";
import { FaPlay, FaMicrophoneAlt, FaStar, FaMusic } from "react-icons/fa";

const member = {
  id: "vocal01",
  name: "Khánh Huyền",
  role: "Vocal Nữ",
  avatar:
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/468959553_2353831791622672_7692816604993874647_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yuk1z6ibzjIQ7kNvwH6rR8l&_nc_oc=AdmEWedeodOL9CqMPUc2LerQFivTBds2QpkKUHJ2TFIBjnQ5yByMGj9gTBaZhqK46vA&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=wAhll0p7tc-IpTxesv-MWw&oh=00_AfffEc97reFuRh6h4Ae4ObUvdvrDNXhneuS9d8nzIybAmw&oe=68F27E20",
  description:
    "Vocal chính của T Shine Band với chất giọng truyền cảm, phong cách biểu diễn đầy cảm xúc và khả năng kết nối khán giả tuyệt vời.",
  genres: ["Ballad", "Acoustic", "Cover"],
  videos: [
    {
      title: "Ôm em được không",
      embedId: "qe0R1Fv29-c",
      genre: "Ballad",
      vertical: true,
    },
    {
      title: "We don't talk anymore",
      embedId: "F6Yg_3GCpBY",
      genre: "Cover",
      vertical: true,
    },
    {
      title: "Hold My Hand - Studio",
      embedId: "YxY8zYxGQ9E",
      genre: "Acoustic",
      vertical: false,
    },
  ],
  gallery: [
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
    "https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/484352974_2432086863797164_1493171452385823170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tgGAS_jX7igQ7kNvwGgwcG5&_nc_oc=AdmcfwmLkGlhBPgN3Ssgy4gTcYf8CUjz6mec_4OdSFKNloqu9eXlnf44JEpPYKSD8nY&_nc_zt=23&_nc_ht=scontent.fsgn8-1.fna&_nc_gid=ElTgebVLH6BziVImFuyA4g&oh=00_AffuI2Bx6uWVwnqihI27aoRKqoCz2UX2ljcupXXCk6QSRw&oe=68F25F62",
  ],
};

export default function MemberDetailPage() {
  const [activeGenre, setActiveGenre] = useState("Tất cả");

  const filteredVideos =
    activeGenre === "Tất cả"
      ? member.videos
      : member.videos.filter((v) => v.genre === activeGenre);

  return (
    <section className="min-h-screen bg-gradient-to-br  text-gray-900 container mx-auto px-4 md:px-0 mt-30">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <div className="relative w-64 h-auto rounded-xl overflow-hidden shadow-xl border-4 border-blue-500 animate-pulse">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-extrabold text-blue-400 mb-2 tracking-wide drop-shadow-lg">
            {member.name}
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl text-gray-800 font-semibold italic drop-shadow-md">
              {member.role}
            </h3>
            <FaMicrophoneAlt className="text-pink-400 text-2xl animate-pulse" />
            <FaMusic className="text-yellow-400 text-xl animate-bounce" />
            <FaStar className="text-gray-800 text-xl animate-pulse" />
          </div>
          <p className="text-blue-100 text-base leading-relaxed max-w-2xl">
            {member.description}
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition font-bold tracking-wide">
            Đặt ngay Vocal này cho sự kiện của bạn
          </button>
        </div>
      </div>

      {/* Genre Filter */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Thể loại đã biểu diễn</h2>
        <div className="flex flex-wrap gap-4">
          {["Tất cả", ...member.genres].map((genre, index) => (
            <button
              key={index}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                activeGenre === genre
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-700 hover:bg-blue-200"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden group"
          >
            <div className={`relative ${video.vertical ? "aspect-[9/16]" : "aspect-video"}`}>
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
                {video.genre}
              </div>
            </div>
            <div className="p-4 text-blue-800 font-medium text-sm flex items-center justify-between">
              {video.title}
              <FaPlay className="text-blue-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Hình ảnh biểu diễn cá nhân</h2>
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {member.gallery.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition transform hover:scale-[1.05] hover:brightness-110"
            >
              <img src={img} alt={`Gallery ${index}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

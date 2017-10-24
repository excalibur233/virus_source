module.exports = function (sequelize, DataTypes) {
  const BonusPoint = sequelize.define('BonusPoint', {
    // 主键
    id: {
      type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    // 操作说明 ：
    // 1.自己浏览 2.下级浏览 3.自己转发 4.下级转发
    operator: { type: DataTypes.STRING, allowNull: false },
    // 操作对应积分
    pointNum: { type: DataTypes.FLOAT, allowNull: false },
  }, {
    timestamps: false,
    paranoid: false,
    freezeTableName: true,
    tableName: 'bonus_point',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return BonusPoint;
};
